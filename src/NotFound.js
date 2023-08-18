import { Link } from "react-router-dom/cjs/react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not Found</h2>
            <p>The page you are trying to find does not exist</p>
             <Link to="/" className='link'>Back to home...</Link>
        </div>
     );
}
 
export default NotFound;