import InputBox from '../Component/InputBox';
import Button from '../Component/Button';
import { useState ,useEffect} from 'react';
import {useNavigate, useSearchParams ,createSearchParams} from 'react-router-dom';

function Second(props) {
    const [mail,setMail] = useState();
    const [address,setAddress] = useState();
    const [SearchParams] = useSearchParams();
    const [secTimer,setSecTimer] = useState(parseInt(SearchParams.get("timer")))
    const Navigate =useNavigate();

    useEffect(()=>{
        setInterval(myTimer, 1000);
        return(
            clearInterval()
        )
    },[secTimer])

    function myTimer() {
        setSecTimer(secTimer+1)
      }

    const handleChange = () =>{
        if(mail && address){
            Navigate({
                pathname:"/Result",
                search:createSearchParams({
                  name:SearchParams.get("name"),
                  age:SearchParams.get("age"),
                  mail:mail,
                  address:address,
                  secTimer:secTimer
                }).toString()
            }); 
        }else{
            alert("please enter name or age");
        }
    }

    return(
      <>
        <div style={{padding:"5px",textAlign:"center"}}>
            <h1>Enter Your Details - {secTimer}</h1>
           <InputBox type="text" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Enter Your Mail Id" /><br/>
           <InputBox type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Your Address" /><br/>
           <Button label="Save" onClick={()=>handleChange()} />
        </div>
      </>
  )
}

export default Second;