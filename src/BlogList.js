import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return (  
        <div className="blog-list">
            <h2 className="blog-heading">{title}</h2>
             {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <h2 className="blog-title">{blog.title}</h2>
              <p class="blogAuthor">Written by {blog.author}</p>
              </Link>

          </div>
      ))}
        </div>
    );
}
 
export default BlogList;