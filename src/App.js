
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {AppRoutes} from './routes';

function App() {
  return (
    <Router>
      <Switch>
         {
           AppRoutes.map(route => <Route {...route}  />)
         }
      </Switch>
    </Router>
  );
}

export default App;
