import { useEffect, useState } from "react";
import Pagination from "./Pagination";

type Data = {
  userId?: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resData = await res.json();
      if (!res.ok) {
        throw new Error("failed to fetch data");
      } else {
        setData(resData);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="container">
        {data &&
          // change the data to currentPost
          currentPost.map((item: Data) => (
            <div className="card" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
      <Pagination
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
