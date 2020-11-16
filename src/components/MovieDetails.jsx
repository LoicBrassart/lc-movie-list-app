import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchMovie();
    }, [])

    const fetchMovie = () => {
        axios.get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
            .then(({ data }) => {
                const myMovie = data.movies.filter((movie) => {
                    return movie.id === parseInt(id);
                })[0];
                setMovie(myMovie);
            })
    }

    return (
        <>
            <h2>{movie.title} ({movie.year})</h2>
            <p>{movie.plot}</p>
        </>
    )
}