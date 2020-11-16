import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import moviesData from "../moviesData.json";

export default function MovieList() {
    const [movies, setMovies] = useState(moviesData);
    const [areOnlyRecentMoviesDisplayed, setRecents] = useState(false);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = () => {
        axios.get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
            .then(({ data }) => {
                setMovies(data.movies);
            })
    }

    const toggleRecents = () => {
        setRecents(!areOnlyRecentMoviesDisplayed);
    }

    return (
        <>
            <button onClick={toggleRecents}>Display {areOnlyRecentMoviesDisplayed ? "recent" : "all"} films</button>
            <ul>
                {movies.filter((movie) => {
                    if (!areOnlyRecentMoviesDisplayed) {
                        return true;
                    }
                    return (parseInt(movie.year) > 2000)
                }).map(({ id, title, year, director }) => {
                    return <Movie key={id} title={title} year={year} director={director} />
                })}
            </ul>
        </>
    )
}