function InputBox(props){
    return(<>
      <input 
         type={props.type} 
         name={props.name} 
         value={props.value} 
         onChange={props.onChange} 
         placeholder={props.placeholder}
         style={{padding:'5px',margin:'5px'}}
       />
    </>)
}

export default InputBox;