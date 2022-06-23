import {  useState } from "react";
import { colors } from "../style/global";
import { useNavigate } from "react-router-dom";

const Create = (pending,setPending) =>{
  const [title,setTitle] =useState("");
  const [body,setBody] =useState("");
  const [img,setImg] =useState("");
  const [author,setAuthor] =useState("");
  const navigate =useNavigate();

   const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = {
        title,
        body,
        img, 
        author,
    }
    fetch("http://localhost:8000/blogs",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newBlog)
    }).then(() => {
    setPending(!pending);
    navigate("/")});
    
    
   }

    return (
        <div className="createContainer" 
        style ={{width:"48%"}}>
            <form  onSubmit={submitHandler} 
            style ={{display:"flex",flexDirection:"column"}}
            >
                <label>Title</label>
                <input type="text" required  
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Body</label>
                <textarea  required
                 value={body}
                onChange={(e) => setBody(e.target.value)} 
                 />
                <label>Image Link</label>
                <input text="text" required 
                 value={img}
                onChange={(e) => setImg(e.target.value)} 
                 />
                <select 
                value={author} 
                onChange={(e)=> setAuthor(e.target.value)} >
                    <option value="maynak">Mayank</option>
                    <option value="sudhanshu">Sudhanshu</option>
                    <option value="sourav">Sourav</option>
                    <option value="kapil">kapil</option>
                </select>
                <input type="submit"  
                style= {{ cursor:"pointer",
                backgroundColor:colors.logo,
                scolor:colors.light}} />

            </form>
        </div>
    )

}

export default Create;