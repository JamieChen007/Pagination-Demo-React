import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLimit, setPageLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(url);
        setLoading(false);
        setTotalPage(Math.ceil(res.data.length / pageLimit));
        setPosts(
          res.data.slice(
            currentPage * pageLimit - pageLimit,
            currentPage * pageLimit
          )
        );
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(true);
      }
    };
    fetchData();
  }, [currentPage, pageLimit]); //componentDidmount

  const getCurrentPage = (e) => {
    setCurrentPage(e);
  };

  const getPageLimit = (e) => {
    setPageLimit(e);
    setCurrentPage(1);
  };

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container">
      <h1>Pagination Demo</h1>
      <Posts posts={posts} />
      <Pagination
        totalPage={totalPage}
        getCurrentPage={getCurrentPage}
        getPageLimit={getPageLimit}
      />
    </div>
  );
}

export default App;
