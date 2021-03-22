import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'

// lazy loading
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Suspense fallback={<p>...loading </p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
      </Switch>
    </Suspense>
  );
}

export default App;
