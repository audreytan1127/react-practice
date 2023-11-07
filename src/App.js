import logo from './logo.svg';
import './App.css';
// Using export object info into a React JSX code. Like calling object properties in JS
export const audreyInfo = {
    phone: 'Business Phone: 830-570-3628',
    email: 'Business Email: audrey.wanmun.tan@gmail.com'
}

// Testing random dynamic value generator with array list of strings and Math.random method.
const audreyAdjectives = ['Hard-working', 'Fast-learning', 'Reliable', 'Respectable', 'Personable', 'Leadership-qualified'];
function getRandomInt(max){
    return Math.floor(Math.random()* (max + 1));
}

// React Header component
function Header(){
      // call for random string value in adjectives list , declare within scope of function
      const audreyFullStackAdj = audreyAdjectives[getRandomInt(5)];

  return(
      // JSX code to build header
      <header className="App-header">
        <img src= {logo} className="App-logo" alt="logo" />
          <h1> Audrey Tan:</h1>
        <p>
            {audreyFullStackAdj} Full-Stack Web Developer
        </p>
          <h2> For business inquiries: </h2>
          <h2> {audreyInfo.phone}</h2>
          <h2> {audreyInfo.email}</h2>
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

// App function to return JSX code to build the header and add a button after Header.
function App() {
  return (
    <div className="App">
      <Header />
      <button>This is a button</button>
    </div>
  );
}

// Exports App function to any other file that imports the function.
export default App;
