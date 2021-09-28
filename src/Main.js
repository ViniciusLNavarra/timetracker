import { Link } from 'react-router-dom'

export default function Main() {
    return(
        <div>
            <button><Link to="/record/add">Add new record</Link></button>
            <button><Link to="/label/all">Labels</Link></button>
            <p>Todo implement records</p>
        </div>
    )
}