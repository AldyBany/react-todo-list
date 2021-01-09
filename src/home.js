import {useState} from 'react';
import BlogList from './blog-list';

const Home = () => {

    
        const [blogs, setBlogs] = useState([
            {title: "My nwe website", body: "lorem psum....", author:"mario", id: 1},
            {title: "Welcome party!", body: "lorem psum....", author:"yoshi", id: 2},
            {title: "Web dev tips", body: "lorem psum....", author:"mario", id: 3}
        ]);
    
   
    return ( 
        <div className="home">
          <BlogList blogs ={blogs}/>
          
        </div>
     );
}
 
export default Home;