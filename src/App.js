import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'

// lazy loading
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));

function App() {
  return (
    <Suspense fallback={<p>...loading </p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
      </Switch>
    </Suspense>
  );
}

export default App;
