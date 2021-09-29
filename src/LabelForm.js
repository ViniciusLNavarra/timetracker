import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export default function LabelForm() {
    return (
        <div>
            <button><Link to="/label/all">Back</Link></button>
            <div>
                <h2>New Label</h2>
                <TextField id="name" label="Name" variant="outlined" /> <br/>
                <TextField id="description" label="Description" multiline rows={4}/> <br/>
                <p>Color</p>
                <Button>Submitbutton</Button>
            </div>
        </div>
    )
}