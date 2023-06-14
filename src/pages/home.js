import { useNavigate } from 'react-router';
//Importing components
import Navbar from "../components/navbar";
import Button from "../components/button";

function Home() {
    //useNavigate to send te user to the right page when using the button. 
    const navigate = useNavigate();
    //function that send thes user to the right page.
    const handleClick = () => {
        navigate('/page/currencyconverter');
    }

    return (
        <div className="homeWrapper">
            <Navbar />
            <div className="buttonWrapper">
            <Button className="roundButton" type="button" text="Convert Now" onClick={handleClick} /> 
            </div>
        </div>
    );
}

export default Home;