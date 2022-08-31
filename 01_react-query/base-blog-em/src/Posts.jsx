import { useState } from "react";
import { useQuery } from "react-query";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // isLoading VS isFetching
  /*
        isFetching : 비동기 쿼리가 해결되지 않음
        isLoading : 가져오는 상태에 있음, 쿼리 핢수가 아직 해결되지 않음, 표시할 캐시 데이터도 없음,
                    isLoading 은 isFetching 의 부분집합
        isError : 오류가 있을시에 기본적으로 3번 재요청 후 에러 반환
  */
  // options
  /*
        staleTime(default 0) : 데이터가 만료됐다고 판단하기 전까지 허용하는 시간 > 시간 초과시 데이터 만료(stale) 상태
                                즉 데이터가 fresh > stale 상태로 변경되는데 걸리는 시간
        cacheTime(default 5분) : 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간 > 시간 초과시 가비지 콜렉터로 수집
  */
  const { data, isLoading, isFetching, error, isError } = useQuery(
    "posts",
    fetchPosts,
    { staleTime: 2000, cacheTime: 3000 }
  );

  return (
    <>
      <ul>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          data.map((post) => (
            <li
              key={post.id}
              className="post-title"
              onClick={() => setSelectedPost(post)}
            >
              {post.title}
            </li>
          ))
        )}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
