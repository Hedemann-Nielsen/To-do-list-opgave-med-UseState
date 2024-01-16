import './App.scss';
import { Home } from "./pages/Home/Home";
import { Done } from './pages/Done/done';
import { InProgress } from './pages/In Progress/InProgress';
import { Routes, Route } from 'react-router-dom';

const arrRoutes = [
  { title: "home", url: "/home", element: <Home />, visible: true },
  { title: "in progress", url: "/in_progress", element: <Done />, visible: true },
  { title: "done", url: "/done", element: <InProgress />, visible: true },
];

function App() {
  return (
    <>
      <Routes>
      <Route index element={<Home />} />

        {arrRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.url}
            element={route.element}
          />
          
        ))}
      </Routes>
    </>
  );
}

export default App;
