import React from "react";
import { useQuery } from "react-query";
import { getUserDetails } from "../services/get-user-details";
import Image from "next/image";

const UserItemBase = ({ user }) => {
  const { data, isFetching } = useQuery(
    ["user-details", user.id],
    async () => {
      return (await getUserDetails(user.id)).data;
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  console.log("user details", {
    isFetching,
    userId: user.id,
    data,
  });

  const year = new Date().getFullYear();
  const yearOfBirth = data && data.dateOfBirth.slice(0, 4);

  return (
    <div className="w-full md:w-48 lg:w-56 xl:w-58 2xl:w-60 lg:flex rounded-lg border-2 bg-white flex flex-col justify-center items-center m-2 md:m-4 p-5 hover:shadow-lg">
      <div
        className="relative w-28 h-28 flex rounded-full p-2 mt-2
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
          "loading"
        )}
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="text-lg md:text-xl lg:text-2xl">
          {data && data.firstName}
        </div>
        <div className="text-lg md:text-xl lg:text-2xl ml-1">
          {data && data.lastName}
        </div>
        <div className="flex justify-center items-center text-lg md:text-xl lg:text-2xl p-2">
          {year - yearOfBirth}
        </div>
      </div>
      <div className="flex justify-center items-center text-sm md:text-sm lg:text-md p-2">
        {data && data.email}
      </div>
      <div className="flex justify-center items-center text-sm md:text-sm lg:text-md p-2">
        {data && data.location.country}
      </div>
    </div>
  );
};

export const UserItem = React.memo(
  UserItemBase,
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);
