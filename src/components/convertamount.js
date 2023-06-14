function ConvertAmount (props) {
    //sending data up to the parent compnent.
    const handleKeyUp = (e) => {
        console.log("ConvertFromTo, handleKeyUp()", e.target.value, "convertfromto");
        props.SendAmount(e.target.value);
    };

    return (
        <div className="formItems">
            <label className="convertInfo">{props.text} </label>
            <input className="inputInForm" onChange={props.onChange} type="number" id="convertInfo" value={props.value} placeholder="Amount" onKeyUp={handleKeyUp} />
        </div>
    );
}

export default ConvertAmount;