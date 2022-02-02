import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>This page can not be found...</p>
            <Link to='/'>Back Home</Link>
        </div>
     );
}
 
export default NotFound;