// External Dependencies
import { Route, Routes } from 'react-router-dom';

// Pages
import {
  Mentors
} from './pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: <Mentors />
  },
  {
    path: '/mentors',
    exact: true,
    component: <Mentors />
  }
];

const App = () => {
  return (
    <Routes>
      {
        routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        ))
      }
    </Routes>
  );
}

export default App;
