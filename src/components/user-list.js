import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../services/get-users";
import { UserItem } from "./user-item";

export default function UserList() {
  const { data, isFetching } = useQuery(
    "users",
    async () => {
      return (await getUsers(1)).data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center bg-white rounded-lg mx-10">
      {data?.data.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}