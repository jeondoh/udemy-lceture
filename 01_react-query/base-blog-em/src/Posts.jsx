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
  const { data, isLoading, isFetching, error, isError } = useQuery(
    "posts",
    fetchPosts
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
