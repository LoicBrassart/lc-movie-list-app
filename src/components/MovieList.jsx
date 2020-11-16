import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import moviesData from "../moviesData.json";

export default function MovieList() {
    const [movies, setMovies] = useState(moviesData);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = () => {
        axios.get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
            .then(({ data }) => {
                setMovies(data.movies);
            })
    }

    return (
        <ul>
            { movies.map(({ id, title, year, director }) => {
                return <Movie key={id} title={title} year={year} director={director} />
            })}
        </ul>
    )
}