import React, { useState, useEffect } from "react";
import  {Router, useParams} from "react-router"; 
import { Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


function PostDetail() {
  useEffect(() => {
    fetchPost();
  }, []);

  const [post, setPost] = useState([]);
  const {id} = useParams();
  
  const fetchPost= async () => {
      const fetchPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await fetchPost.json();
      setPost(post);
  };

  return (
    <>
    <p>
      <p align={'center'}>
      <Card sx={{ maxWidth: 345 }}>
        <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3-rUE4SORzLoGxaLp7KvLAHaHa%26pid%3DApi&f=1'/>
        <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
        </CardContent>
      </Card>
      </p>
      <Link  to="/posts">
          <h1>Return</h1>
    </Link>
    </p>
    </>
  );
}

export default PostDetail;
