import {Link} from 'react-router-dom'
import '../Css/error404.css'

export default function Error404 (){
    return (
   
        <div className="not-found">
            <div className="error-main">
                <p>404:</p>
            </div>
            <div className="error-body">
                <p>Oooops!You weren't supposed to see this! </p>
            </div>
                <div className="link-notfound">

                <button type="button" className="btn btn-outline-warning"><Link to="/">Go Back to your Mama</Link></button>
                
                
                </div>
       </div>
       
    )
}
