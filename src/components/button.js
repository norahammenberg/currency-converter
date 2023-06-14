function Button(props) {
    return (
            <button className={props.className} type={props.type}  value={props.value} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button; 