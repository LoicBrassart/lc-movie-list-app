export default function Movie({ title, year, director }) {
    return (
        <li>
            Movie: {title} ({year}) - {director}
        </li>
    )
}