import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import appRoutes from "./Routes/appRoutes";
import { Header } from "./componenets";
import Footer from "./componenets/Footer/Footer";
import PrivateRoute from "./Routes/PrivateRoute";

// json-server --watch src/Dummy/db.json
function App() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = localStorage.getItem("accessToken") !== null;

  // const { pathname } = useLocation();

  //   // Scroll to top on route change
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <div className="main">
          <Routes>
            {appRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.private ? (
                    <PrivateRoute>{route.element}</PrivateRoute>
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Routes>
        </div>

        <Footer />

        {/* {isLoggedIn ? <div>Welcome back!</div> : <div>Please log in.</div>} */}
      </Router>
    </div>
  );
}

export default App;
