import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
