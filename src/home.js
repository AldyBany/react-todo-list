import {useState, useEffect} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, error} = useFetch('http://localhost:8000/blogs')
   
    return ( 
        <div className="home">
            {/* <h2>Blogs</h2> */}
            {error && <div>{error}</div>}
            { blogs && <BlogList blogs={blogs} title={"New Blog"}/>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author ==="aldy")} title={"Adly's Blogs"}/> */}
        </div>
     );
}
 
export default Home;