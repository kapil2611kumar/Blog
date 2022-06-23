import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = ({pending,setPending}) => {
  const {id} = useParams();
  const[blog,setBlogs] = useState({});
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch("http://localhost:8000/blogs/1")
    .then((res) =>res.json())
    .then((data) =>setBlogs(data) );

  },[pending]);

  useEffect(() =>{
    fetch(`http://localhost:8000/blogs/${id ? id : "1"}`)
    .then((res) =>res.json())
    .then((data) =>setBlogs(data) );
    
  },[id]);
 

  const deleteHandler = () => {
    fetch(`http://localhost:8000/blogs/${id}`,{
      method:"DELETE",
    }).then(() => {
       setPending(!pending);
       navigate("/");
    });

  }



  return (
    <div className="blogContainer" style  ={{maxWidth:"40%"}}>
      <img src={blog.img}
              alt=" " />
      <h1>  { blog.title}</h1>
      <p> {blog.body} </p>
      <button onClick={deleteHandler}>Delete</button>
      
    </div> 
  )
}

export default Blog;