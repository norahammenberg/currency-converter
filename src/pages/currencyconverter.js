//import components. 
import Navbar from "../components/navbar";
import ConvertFromTo from "../components/convertfromto";
import Button from "../components/button";
import ConvertAmount from "../components/convertamount";

import { useState } from 'react';

function CurrencyConvert () {

    //collecting data from child component:
    const collectDataFromTo = () => {
        console.log("collectDataFromTo()", );
    }
    const collectDataAmount = () => {
        console.log("collectDataAmount()", );
    }

     //creating a state for loading:
    const [loading, setLoading] = useState(false);

    //fetching results
    const [result, setResult] = useState ([]);

    //creating the function to fetch the results. Here will the information that the user put in the form be added to the API call: 
    const activateFetch = () => {
        //Api call is loading
        setLoading(true);
        fetch (`https://api.apilayer.com/currency_data/convert?to=${convertto}&from=${convertfrom}&amount=${amount}`, {
                method: 'GET',
                headers: {
                    "apikey": process.env.REACT_APP_KEY
                }//end headers
            })//end fetch
            .then(response => response.json())
            .then(json => {
                console.log(json);
                //json file saves. 
                setResult(json)
                //not loading anymore
                setLoading(false);
            });
            
    }

    //set const to save users input
    const [amount, setAmount] = useState('');
    const [convertfrom, setConvertFrom] = useState('');
    const [convertto, setConvertTo] = useState('');

    //function that handles the click and if statements on what will happend depending on the users input. 
    const handleClick = (e) => {
        e.preventDefault();

        if(amount && convertfrom && convertto) {
            //run the function activatefetch, the API call is beeing done. 
            activateFetch();
        }

        else{
            return (
                alert("Please provide an amount or what currency you wish to convert to/from, thank you. ")
            )
        }
    }

    return (
        <div className="appWrapper">
            <Navbar />
            {/*<Form />*/}
            <div className="currencyFormWrapp">
                <form  className="currencyForm">
                    <h1 className="header">Currency Converter</h1>
                    {/**Componentes with props */}
                    <ConvertAmount text="Amount to convert: " onChange={e => setAmount(e.target.value)} value={amount} SendAmount={collectDataAmount} />
                    <ConvertFromTo text="Convert From: " onChange={e => setConvertFrom(e.target.value)} value={convertfrom} SendData={collectDataFromTo} />
                    <ConvertFromTo text="Convert To: " onChange={e => setConvertTo(e.target.value)} value={convertto} SendData={collectDataFromTo}/>
                    {/**Submit */}
                    <Button className="roundButton convertButton" type="submit" form="currencyConvert" onClick={handleClick} text="Convert Now!" />
   
                    {/*Result*/} 
                    <div className="formResult">
                        <p className="formResultHeading">Converted: </p>
                        <p className="inputInForm currencyResult">{loading ? <>Loading... </> : <>{result.result}</>}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CurrencyConvert;