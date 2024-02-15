function Button(props) {
    return(
        <>
         <button onClick={props.onClick} style={{padding:"5px"}}>{props.label}</button>
        </>
    )
}

export default Button;