import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { getUsers } from "../services/get-users";
import { UserItem } from "./user-item";

export default function UserList({ filteredData, setFilteredData }) {
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
        console.log({
          lastPage: lastPage,
          totalPage: lastPage.data.total,
          page: lastPage.data.page,
        });
        if (lastPage.data.page < lastPage.data.total)
          return lastPage.data.page + 1;
        return false;
      },
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-wrap justify-center min-h-0 items-center bg-white rounded-lg w-11/12 mx-auto mt-10">
        {data
          ? data.pages.map((page) => (
              <React.Fragment key={page.data.page}>
                {page &&
                  page.data.data.map((el) => <UserItem key={el.id} el={el} />)}
              </React.Fragment>
            ))
          : ""}
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
