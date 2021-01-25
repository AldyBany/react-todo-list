const BlogLists = ({blogs, title, handleDelete}) => {
   
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <h4>Written by {blog.author}</h4>
                  <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
              </div>
                 ))}
        </div>
     );
}
 
export default BlogLists;