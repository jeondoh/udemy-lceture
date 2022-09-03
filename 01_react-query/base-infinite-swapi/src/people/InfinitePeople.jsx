import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Person } from "./Person";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      "sw-people",
      ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          data.pages.map((pageData) => {
            return pageData.results.map((person) => {
              return (
                <Person
                  key={person.name}
                  name={person.name}
                  hairColor={person.hair_color}
                  eyeColor={person.eye_color}
                />
              );
            });
          })
        )}
      </InfiniteScroll>
    </>
  );
}
