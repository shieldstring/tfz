import { BrowserRouter as Router,Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div className="App">
         
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } /> 
            <Route path="register" element={ <Register /> } /> 
            <Route path="thanks" element={ <Thanks /> } /> 

          </Routes>
        </Router>
          
    </div>
  );
}

export default App;
