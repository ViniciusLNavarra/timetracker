import * as React from 'react'
import { Button, TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/lab'
import { Link } from 'react-router-dom'

export default function RecordForm() {
    const [value, setValue] = React.useState(new Date());

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
                <button><Link to="/">Back</Link></button>
                <div>
                    <h2>New Record</h2>
                    <TextField id="title" label="Title" variant="outlined" /> <br/>
                    <TextField id="description" label="Description" multiline rows={4}/> <br/>
                    <h4>Start</h4>
                    <MobileDateTimePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <h4>End</h4>
                    <MobileDateTimePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Button>Submitbutton</Button>
                </div>
            </div>
        </LocalizationProvider>
    )
}