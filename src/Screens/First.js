import InputBox from '../Component/InputBox';
import Button from '../Component/Button';
import { useEffect, useState } from 'react';
import {useNavigate ,createSearchParams} from 'react-router-dom';

function First(props) {
    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [timer,setTimer] = useState(0);
    const Navigate = useNavigate();


    useEffect(()=>{
        setInterval(myTimer, 1000);
        return(
            clearInterval()
        )
    },[timer]);

    function myTimer() {
        setTimer(timer+1)
      }


    const handleChange = () =>{
        if(name && age){
            Navigate({
                pathname:"/Second",
                search:createSearchParams({
                  name:name,
                  age:age,
                  timer:timer
                }).toString()
            });  
        }else{
            alert("please enter name or age");
        }
    }

    return(
      <>
        <div style={{padding:"5px",textAlign:"center"}}>
            <h1>Enter Your Details - </h1>
            <h2>{timer}</h2>
           <InputBox type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" /><br/>
           <InputBox type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Your Age" /><br/>
           <Button label="Save" onClick={()=>handleChange()} />
        </div>
      </>
  )
}

export default First;