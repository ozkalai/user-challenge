import React from "react";
import { useQuery } from "react-query";
import { getUserDetails } from "../services/get-user-details";
import Image from "next/image";

const UserItemBase = ({ el }) => {
  const { data, isFetching } = useQuery(
    ["user-details", el.id],
    async () => {
      return (await getUserDetails(el.id)).data;
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  const year = new Date().getFullYear();
  const yearOfBirth = data && data.dateOfBirth.slice(0, 4);

  return (
    <div className="w-full relative sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-48 2xl:w-56 shadow-md hover:shadow-lg mx-4 my-4 cursor-pointer rounded-lg">
      <div className="w-full absolute top-0 left-0  h-20 bg-gray-400 rounded-t-lg"></div>
      <div className="w-full h-40 flex justify-center">
        <div className="w-40 h-40 rounded-full z-10 relative overflow-hidden">
          {data && (
            <>
              <Image
                className="image"
                src={data.picture}
                alt="user"
                width={120}
                height={120}
                objectFit="cover"
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full h-40 flex justify-start items-center pt-5  flex-col font-sans">
        <div className="flex items-center">
          <p className="text-center w-full text-xl font-semibold  ">
            {data ? `${data && data.firstName} ${data && data.lastName}` : ""}
          </p>
        </div>
        <p className="text-lg md:text-sm lg:text-md w-42 text-center mt-4 overflow-hidden overflow-ellipsis">
          {data ? data.email : ""}
        </p>
        <p className="text-sm md:text-sm lg:text-md mt-4 font-semibold ">
          {data
            ? `${data && data.location.country} , ${year - yearOfBirth} years`
            : ""}
        </p>
      </div>
    </div>
  );
};

export const UserItem = React.memo(
  UserItemBase,
  (prevProps, nextProps) => prevProps.el.id === nextProps.el.id
);
