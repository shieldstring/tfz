import { BrowserRouter as Router,Route , Routes} from "react-router-dom";
import EmailConfirm from "./account/EmailConfirm";
import Home from "./pages/Home";
import Register from "./account/Register";
import Thanks from "./account/Thanks";
import Agreement from "./account/Agreement";
import Favourite from "./account/Favourite";
import NameTeam from "./pages/NameTeam";
import YourAccount from "./account/YourAccount";
import CreateLeague from "./league/CreateLeague";
import JoinLeague from "./league/JoinLeague";
import JoinPrivateLeague from "./league/JoinPrivateLeague";
import Wallet from "./wallet/Wallet";
import Withdrawls from "./wallet/Withdrawls";
import Login from "./account/Login";
import Fixtures from "./pages/Fixtures";
import LeagueFixtures from "./league/LeagueFixtures";
import EntryHistory from "./pick team/EntryHistory";
import Fund from "./wallet/Fund";
import JoinPublicLeague from "./league/JoinPublicLeague";
import SquadSelection from "./squad/SquadSelection";
import ListView from "./squad/ListView";
import TabsRender from "./squad/ListView";
import Transfer from "./pages/Transfer";
import SelectCaptain from "./pages/SelectCaptain";




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
            <Route path="selectcaptain" element={ <SelectCaptain /> } />
            <Route path="account" element={ <YourAccount/> } />

            <Route path="squad" element={ <SquadSelection /> } />
            <Route path="transfer" element={ <Transfer /> } />


            <Route path="league" element={ <CreateLeague/> } />
            <Route path="joinleague" element={ <JoinLeague/> } />
            <Route path="joinprivateleague" element={ <JoinPrivateLeague /> } />
            <Route path="joinpublicleague" element={ <JoinPublicLeague /> } />

            <Route path="wallet" element={ <Wallet /> } />
            <Route path="withdrawls" element={ <Withdrawls /> } />
            <Route path="fund" element={ <Fund /> } />

            <Route path="login" element={ <Login /> } />
            <Route path="fixtures" element={ <Fixtures /> } />
            <Route path="leaguefixtures" element={ <LeagueFixtures /> } />
            <Route path="entryhistory" element={ <EntryHistory /> } />
            
          </Routes>
        </Router>
          
    </div>
  );
}

export default App;
