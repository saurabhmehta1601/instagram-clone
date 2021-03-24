import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";

// lazy loading
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const {user} =useAuthListener()
  return (
    <UserContext.Provider value={{user}}>
    <Suspense fallback={<p>...loading </p>}>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.SIGN_UP} component={Signup} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route  component={NotFound} />
      </Switch>
    </Suspense>
    </UserContext.Provider>
  );
}

export default App;
