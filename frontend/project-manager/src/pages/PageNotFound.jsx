import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
        <FaExclamationTriangle className="icon" size="5em" />
        <h1>Page not found</h1>
        <div className="container-sm">

       <button className="btn btn-warning">
        <Link to ='/' className="text-dark" style={{textDecoration: 'none'}}>Go Back</Link>
       </button>
        </div>

    </div>
  )
}

export default PageNotFound