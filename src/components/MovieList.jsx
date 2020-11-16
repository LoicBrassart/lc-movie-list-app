import { useState } from "react";
import Movie from "./Movie";
import moviesData from "../moviesData.json";


export default function MovieList() {
    const [movies, setMovies] = useState(moviesData);

    return (
        <ul>
            { movies.map(({ id, title, year, director }) => {
                return <Movie key={id} title={title} year={year} director={director} />
            })}
        </ul>
    )
}