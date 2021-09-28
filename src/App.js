import './App.css';
import Main from './Main'
import RecordForm from './RecordForm'
import Labels from './Labels'
import LabelForm from './LabelForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* 
          TODO: 
            - Use https://mui.com/components/cards/ to display records 
            - When there are no records display the paragraph below
            - Label button shows https://mui.com/components/modal/ with all Label 
              - Modal has edit labels button that goes to another page
            - New or edit record buttons goes to other page with a form 
          */}
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/record/add">
              <RecordForm />
            </Route>
            <Route exact path="/label/all">
              <Labels />
            </Route>
            <Route exact path="/label/new">
              <LabelForm />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
