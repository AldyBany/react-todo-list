import { useState, useEffect } from "react"
import BlogLists from "./BlogLists"

const Home = () => {

    const [blogs, setBlogs] = useState(null
    )
    // const [number, setNumber]= useState(0)

    const handleDelete = (id)=>{
        const newBlog = blogs.filter(blog=> blog.id !== id)
        setBlogs(newBlog)
    }

    useEffect(()=>{
        const abortCont = new AbortController()
        fetch("http://localhost:8000/blogs",{signal: abortCont.signal})
        .then(res=>{
            return res.json()
        })
        .then((data)=>{
            setBlogs(data)
        })
        return ()=> abortCont.abort()
    },[])
  
    return ( 
        <div className="home">
         {blogs && <BlogLists blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
         {/* <BlogLists blogs={blogs.filter((blog)=> blog.author === "aldy")} title="Aldy's blogs" /> */}
         {/* <p>{number}</p> */}
         {/* <button onClick={()=>setNumber(number + 1)}>Increment</button> */}
         
        </div>
     );
}
 
export default Home;