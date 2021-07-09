import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { getUsers } from "../services/get-users";
import { UserItem } from "./user-item";

export default function UserList({ filteredData, setFilteredData, results }) {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery(
    "users",
    async ({ pageParam = 0 }) => {
      return await getUsers(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page < lastPage.data.total)
          return lastPage.data.page + 1;
        return false;
      },
      refetchOnWindowFocus: false,
    }
  );

  const users = (data) => {
    const userData = data
      ? data.pages.map((page) => page.data.data.map((item) => item))
      : "";
    const allUsers = Array.prototype.concat(...userData);
    return allUsers;
  };

  useEffect(() => {
    setFilteredData(users(data));
  }, [data]);

  return (
    <>
      <div className="flex flex-wrap justify-center min-h-0 items-center bg-white rounded-lg w-11/12 mx-auto mt-10 py-4">
        {results.map((el) => (
          <UserItem
            key={el.id}
            el={el}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={fetchNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
          className="w-32 h-10  bg-transparent hover:bg-blue-500 text-secondary rounded-2xl font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-8"
        >
          Load More
        </button>
      </div>
    </>
  );
}
