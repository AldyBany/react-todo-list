import {useState, useEffect} from 'react'
import BlogList from './blog-list'

const Home = () => {

    const[blogs, setBlogs] =useState([
        {title: "my new website", body:"Lorem ipsum...", author:"mario", id: 1},
        {title: "Welcome party!", body:"Lorem ipsum...", author:"yoshi", id: 2},
        {title: "web dev top tips", body:"Lorem ipsum...", author:"mario", id: 3}
    ])
    const [name, setName] =  useState("Aldy")

    const handleDelete = (id) =>{
        const dblog = blogs.filter(blog=> blog.id !== id)
        setBlogs(dblog)
    }

    useEffect(()=>{
        console.log("Use effcet run")
        // console.log(name)
    },[name])

    return ( 
       <div className="home">
          <BlogList blogs={blogs} title="All blogs!" handleDelete ={handleDelete}/>
          <BlogList blogs={blogs.filter((blog)=>blog.author === "mario")} title="Mario blogs!" handleDelete={handleDelete}/>
          <button onClick={()=>setName("Gaick")}>Change name</button>
          <p>{name}</p>
       </div>
     );
}
 
export default Home;