import { BrowserRouter ,Routes , Route} from "react-router-dom";
import First from './Screens/First';
import Second from "./Screens/Second";
import Result from "./Screens/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}/>
        <Route path="/Second" element={<Second />}/>
        <Route path="/Result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
