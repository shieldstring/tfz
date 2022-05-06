import { BrowserRouter as Router,Route , Routes} from "react-router-dom";
import EmailConfirm from "./screen/EmailConfirm";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Thanks from "./screen/Thanks";
import Agreement from "./screen/Agreement";
import Favourite from "./screen/Favourite";
import NameTeam from "./pages/NameTeam";
import YourAccount from "./pages/YourAccount";
import CreateLeauge from "./pages/CreateLeauge";


function App() {
  return (
    <div className="App">
         
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } /> 
            <Route path="register" element={ <Register /> } /> 
            <Route path="thanks" element={ <Thanks /> } />
            <Route path="confirm" element={ <EmailConfirm /> } />
            <Route path="favourite" element={ <Favourite /> } /> 
            <Route path="agreement" element={ <Agreement /> } />
            <Route path="nameteam" element={ <NameTeam /> } />
            <Route path="account" element={ <YourAccount/> } />
            <Route path="leauge" element={ <CreateLeauge/> } />




          </Routes>
        </Router>
          
    </div>
  );
}

export default App;
