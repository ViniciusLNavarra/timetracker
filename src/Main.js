import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Card } from '@mui/material' 
import { CardHeader } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'

export default function Main() {
    return(
        <div>
            <button><Link to="/record/add">Add new record</Link></button>
            <button><Link to="/label/all">Labels</Link></button>
            <p>Todo implement records</p>
            <p>Example:</p>
            <Card>
                <CardHeader 
                    title="Title"
                    subheader="Start & End?"
                />
                <CardContent>
                    <p>Description if there is one</p>
                    <p>Labels</p>
                </CardContent>
                <CardActions>
                    <Button>
                        Editicon
                    </Button>
                    <Button>
                        Deleteicon
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}