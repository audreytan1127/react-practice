import logo from './logo.svg';
import './App.css';

const audreyAdjectives = ['Hard-working', 'Fast-learning', 'Reliable', 'Respectable', 'Personable', 'Leadership-qualified'];
function getRandomInt(max){
    return Math.floor(Math.random()* (max + 1));
}
function Header(){
  return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1> Audrey Tan:</h1>
        <p>
            {audreyAdjectives[getRandomInt(5)]} Full-Stack Web Developer
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
          Learn React
        </a>
      </header>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <button>This is a button</button>
    </div>
  );
}

export default App;
