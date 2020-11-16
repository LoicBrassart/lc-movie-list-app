import { Link } from "react-router-dom"
export default function Movie({ id, title, year, director }) {
    return (
        <li>
            <Link to={`/movies/${id}`} >{title}</Link> ({year}) - {director}
        </li>
    )
}