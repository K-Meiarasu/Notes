import './App.css';
import Notes from './Notes/Notes';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Keeper</h1>
      </div>
      <Notes></Notes>
      <div className='footer'>
        <div>Copyright &copy; {new Date().getFullYear()} </div>
      </div>
    </div>
  );
}

export default App;
