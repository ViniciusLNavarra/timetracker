import { Link } from 'react-router-dom'

export default function Labels() {
    return (
        <div>
            <button><Link to="/label/new">Add new label</Link></button>
            <button><Link to="/">Back</Link></button>
            <p>Todo implement Lables</p>
        </div>
    )
}