import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const [post, setPost] = useState([]);
  const [postShowed, setPostShowed] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    };

    setPost(getPosts());
  }, []);

  const handlePageClick = (page) => {
    console.log("page", page);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={post.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Paginate;
