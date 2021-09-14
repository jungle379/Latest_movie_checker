import useSWR from 'swr'

const Test = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts')
  console.log({ data, error });

  if (!error && !data) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>(error.message)</div>;
  }

  if (data === 0) {
    return <div>データは空です</div>;
  }

};

export default Test;