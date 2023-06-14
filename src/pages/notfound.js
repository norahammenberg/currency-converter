import { useNavigate } from "react-router";
import Button from "../components/button";

function NotFound() {

     //useNavigate to send te user to the right page when using the button. 
     const navigate = useNavigate();
     //function that send thes user to the right page.
     const handleClick = () => {
         navigate('/page/currencyconverter');
     }
     return (
         <div className="homeWrapper currencyFormWrapp">
            <h1 className="header nfHeading">Error, sorry this pages do not excist....</h1>
            <Button text="Go Back" className="roundButton" type="button" onClick={handleClick} />
        </div>
     );
}
export default NotFound;