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
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
