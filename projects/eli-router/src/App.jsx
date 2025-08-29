import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";
import { Router } from "./Router.jsx";
import  NotFound  from "./pages/NoFound.jsx";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: '/search/:query',
    component: () => <h1>Search</h1>,
  }
];

function App() {
  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={NotFound} />
      </main>
    </>
  );
}

export default App;
