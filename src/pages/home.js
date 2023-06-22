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
                <div className='infoWrap'>
                    <p className="info infoB">Hello and thank you for the visit. </p> 
                    <p className="info">This Currency Convert was made during my studies at University West. </p> 
                    <p className="info">Unfortnually there is a limitation of 100 API calls per month so I kindley ask you to use the app sparley. </p> 
                    <p className="info">Thank you! </p> 
                </div>
                
            </div>
        </div>
    );
}

export default Home;