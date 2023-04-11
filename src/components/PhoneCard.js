const PhoneCard = (props) => {

    return (
        <div>
            {props.children}
            <button onClick={props.button}>Edit</button>
        </div>
    )
};

export default PhoneCard;