import logo from './logo.svg';
import './App.css';
export const audreyInfo = {
    phone: 'Business Phone: 830-570-3628',
    email: 'Business Email: audrey.wanmun.tan@gmail.com'
}
const audreyAdjectives = ['Hard-working', 'Fast-learning', 'Reliable', 'Respectable', 'Personable', 'Leadership-qualified'];
function getRandomInt(max){
    return Math.floor(Math.random()* (max + 1));
}
function Header(){
      const audreyFullStackAdj = audreyAdjectives[getRandomInt(5)];
  return(
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
function App() {
  return (
    <div className="App">
      <Header />
      <button>This is a button</button>
    </div>
  );
}

export default App;
