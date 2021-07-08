import React from "react";
import { useQuery } from "react-query";
import { getUserDetails } from "../services/get-user-details";
import Image from "next/image";

const UserItemBase = ({ el }) => {
  console.log(el);
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

  console.log("user details", {
    isFetching,
    userId: el.id,
    data,
  });

  const year = new Date().getFullYear();
  const yearOfBirth = data && data.dateOfBirth.slice(0, 4);

  return (
    <div className="relative w-full sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-48 2xl:w-56  border-2 mx-4 my-4">
      <div className="w-full flex justify-center items-center h-50 ">
        <div className="w-full h-24 absolute bg-gray-400 top-0 left-0 border-r-2 border-gray-400 "></div>
        <div
          className="relative w-40 h-40 flex rounded-full p-2 mt-4
      "
        >
          {data ? (
            <>
              <Image
                className="image"
                src={data.picture}
                alt="user"
                layout="fill"
                objectFit="cover"
              />
              <style jsx global>{`
                .image {
                  border-radius: 50%;
                }
              `}</style>
            </>
          ) : (
            <div className="flex justify-center items-center"></div>
          )}
        </div>
      </div>
      <div className="w-full h-40 flex justify-center items-center flex-col">
        <div className="flex items-center">
          <div className="flex justify-center items-center text-center w-full text-xl font-semibold  ">
            {data ? `${data && data.firstName} ${data && data.lastName}` : ""}
          </div>
        </div>
        <div className=" text-lg md:text-sm lg:text-md p-2 inline max-w-lg overflow-hidden  overflow-ellipsis">
          {data ? data.email : ""}
        </div>
        <div className="flex justify-center items-center text-sm md:text-sm lg:text-md p-2">
          {data
            ? `${data && data.location.country} , ${year - yearOfBirth} years`
            : ""}
        </div>
      </div>
    </div>
  );
};

export const UserItem = React.memo(
  UserItemBase,
  (prevProps, nextProps) => prevProps.el.id === nextProps.el.id
);
