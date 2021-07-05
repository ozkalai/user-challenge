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

  return (
    <li>
      <h3>{data.firstName}</h3>
    </li>
  );
};

export const UserItem = React.memo(
  UserItemBase,
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);
