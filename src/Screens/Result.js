import {useSearchParams , useNavigate} from 'react-router-dom';
import Button from '../Component/Button';

function Result(props) {
    const [SearchParams] = useSearchParams();
    const Navigate = useNavigate();
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(parseInt(millis) / 60000);
        var seconds = parseInt(millis) %60;
        return minutes + ":" + seconds;
      }
    return(
        <div style={{padding:"5px",textAlign:"justify"}}>
          <h1 style={{color:"green"}}>Your Details is successfully submitted</h1>
          <h2>Check your details</h2>
          <p><b>name:</b>{SearchParams.get('name')}</p>
          <p><b>Age:</b>{SearchParams.get('age')}</p>
          <p><b>Mail:</b>{SearchParams.get('mail')}</p>
          <p><b>Address:</b>{SearchParams.get('address')}</p>
          <p><b>Time Spend:</b>{millisToMinutesAndSeconds(SearchParams.get('secTimer'))}</p>
          <Button onClick={() =>Navigate('/')} label="Go Homepage"/>
        </div>
    )
}

export default Result;