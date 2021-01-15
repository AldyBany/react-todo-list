import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Create = () => {

    const {data: blogs, setBlogs} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="create">
            <h2>Aldy's Blog</h2>
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === 'aldy')}/>}
        </div>
     );
}
 
export default Create;