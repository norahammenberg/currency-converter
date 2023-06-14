//import components
import Navbar from "../components/navbar";
//import photo
import photo from "../Images/norahammenberg.png";

function About() {
    return (
        <div className="appWrapper"> 
            <Navbar />

            <div className="currencyForm aboutWrapper">
                <h1 className="nfHeading header">About</h1>
                <div className="contentWrapper">
                    <div className="photo">
                        <img src={photo} alt="A photograph of the creater of this webb application."></img>
                    </div>
                    <div>
                        <p className="formItems">Hi</p> 
                        <p className="formItems">My name is Nora Hammenberg and I am the creater of this web application. 
                        I made this application as part of my educetion at Högskolan Väst. </p>
                        <p className="formItems">Thanks for the visit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About