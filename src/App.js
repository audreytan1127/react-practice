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

function CoreConcepts(props){
    return(

        <li>
            <h1>{props.project}</h1>
            <p>{props.description}</p>
        </li>
    );
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
            {/* Curly brackets make this a dynamic value that is being called when building html code. */}
            {audreyFullStackAdj} Full-Stack Web Developer
        </p>
          <h2> For business inquiries: </h2>
          {/* Curly brackets call the object audreyInfo and the declared properties: phone and email. Like JS object.*/}
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
        {/*Adding unordered list of projects and their description to load underneath header using reusable props*/}
        <ul>
        <CoreConcepts project="memespace.fun" description="Full-stack online multiplayer meme-making competition." />
        <CoreConcepts project="movie saver" description="Full-stack website to save movies you've watched, and create a shareable movie list!" />
        </ul>
      <button>This is a button</button>

    </div>
  );
}

// Exports App function to any other file that imports the function.
export default App;
