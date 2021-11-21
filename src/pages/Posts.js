import { Card } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from "react";
import {Link, useLocation, useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import '../style.css';


const renderData = posts=>{
  return(
    <p align={'center'}>
    <ul>
      {posts.map((post)=>{
        return(
          <p>
           <Card sx={{ width: 275 }}> 
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2">
            <Link to={`/posts/${post.id}`}><h2>See more</h2></Link>
            </Typography>
            </Card>
            </p>
        )
      })}
      </ul>
      </p>
  )
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  
  const location =  useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('_page')) || 0;
  console.log(location.search);
  console.log(page);

  const pages = [];
  for(let i=0; i<=Math.ceil(posts.length/postsPerPage);i++){
    pages.push(i);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNextButton=()=>{
    setCurrentPage(currentPage + 1);
    query.set('_page', page + 1);
    history.push({search:query.toString()});
    if(currentPage +1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton=()=>{
    setCurrentPage(currentPage - 1);
    query.set('_page', page - 1);
    history.push({search:query.toString()});
    if(currentPage -1 % pageNumberLimit === 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts);
  };
  
  return (
    <div>
      <h1>Posts</h1>
      {renderData(currentPosts)}
      <br></br>
      <p align={'center'}>
      <Stack direction="row" justifyContent="space-around" alignItems="stretch" spacing={8}>
        <Button variant="outlined" onClick={handlePrevButton} disabled={currentPage === pages[1] ? true: false}>Show Previous</Button>
        <Button variant="outlined" onClick={handleNextButton} disabled={currentPage === pages[pages.length - 1] ? true: false}>Show Next</Button>
        
      </Stack>
      </p>
    </div>
  );
}

export default Posts;
