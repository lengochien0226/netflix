import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constans/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hook';
import { Browse, Home, Signin, Signup } from './page';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        pathname={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        pathname={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE} exact
      >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        pathname={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>


    </Router >
  );
}

