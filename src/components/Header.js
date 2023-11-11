import logo from '../assets/logo.svg';

// Testing random dynamic value generator with array list of strings and Math.random method.
const audreyAdjectives = ['Hard-working', 'Fast-learning', 'Reliable', 'Respectable', 'Personable', 'Leadership-qualified'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Using export object info into a React JSX code. Like calling object properties in JS
export const audreyInfo = {
    phone: 'Business Phone: 830-570-3628',
    email: 'Business Email: audrey.wanmun.tan@gmail.com'
}

// React Header component
export function Header() {
    // call for random string value in adjectives list , declare within scope of function
    const audreyFullStackAdj = audreyAdjectives[getRandomInt(5)];

    return (
        // JSX code to build header
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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