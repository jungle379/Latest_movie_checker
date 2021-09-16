import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生しています");
  }

  const json = await response.json();
  return json;
};

const usePosts = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts",
    fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,

  };
}


const Test = () => {
  const { data, error, isLoading, isEmpty } = usePosts()

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol >
  );
};

export default Test;