//importing usestate and useeffect.
import { useState, useEffect} from 'react';

function ConvertFromTo (props) {

    //collect data submitted by user to send up the parent: 
    const handleKeyUp = (e) => {
        console.log("ConvertFromTo, handleKeyUp()", e.target.value);
        props.SendData(e.target.value);
    };

    //creating a state for loading:
    const [loading, setLoading] = useState(false);

    //creating a const for the data from the API
    const [currency, setCurrancy] = useState ([]);

    //fetching data from the API for the dropdowns. 
    useEffect(() => {
        //the fetch is loading
        setLoading(true);
        fetch ("https://api.apilayer.com/currency_data/list", {
            method: 'GET',
            headers: {
                "apikey": "password"
            }//end headers
        })//end fetch
        .then(response => response.json())
        .then(json => {
            //convertingn the object to an array and saving it in a const/varible
            const currencyArray = Object.keys(json.currencies);
            //put the const in an array
            setCurrancy(currencyArray);
            //Not loading anymore:
            setLoading(false);
        });
        //then fetch is completed.
        
    },[])

    return (
            //*Convert From
            <div className="formItems">

                {/**Loadingstate while API call is being done. */}
                {loading ? <>Loading... </> : <>
                    <label>{props.text} </label>
                    <select className="inputInForm" onChange={props.onChange} value={props.value} id="convertFrom" onKeyUp={handleKeyUp}>
                        {/*loop through the array from the API*/}
                        {currency.map((item, key) =>
                            <option key={key}>{item}</option>
                        )}
                    </select>
                </>}
            </div>
        )
    };

export default ConvertFromTo;