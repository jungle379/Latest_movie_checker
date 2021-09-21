import useSWRImmutable from 'swr/immutable';

const API = "https://jsonplaceholder.typicode.com/users/"

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生しています");
  }

  const json = await response.json();
  return json;
};

const usePosts = () => {
  const { data, error } = useSWRImmutable(API,
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
      {data.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ol >
  );
};

export default Test;