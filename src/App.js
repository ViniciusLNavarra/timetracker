import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 
        TODO: 
          - Use https://mui.com/components/cards/ to display records 
          - When there are no records display the paragraph below
          - Label button shows modal with all Label 
            - Modal has edit labels button that goes to another page
          - New or edit record buttons goes to other page with a form 
        */}
        <button>Add new record</button>
        <button>Labels</button>
        <p>No Records found...</p>
      </header>
    </div>
  );
}

export default App;
