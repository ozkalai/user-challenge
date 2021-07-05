import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../src/services/get-users";
import { UserItem } from "../src/components/user-item";

export default function Home() {
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
    <div>
      <ul>
        {data?.data.map((user) => (
          <UserItem user={user} />
        ))}
      </ul>
    </div>
  );
}
