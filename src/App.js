import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./pages/layouts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          {AppRoutes.map((route) => (
            <Route {...route} />
          ))}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
