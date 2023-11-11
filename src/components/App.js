
import './App.css';
import {AUDREY_LANG} from "../assets/data";
import {Header} from './Header';





function AudreyProjects(props) {
    return (
        <li className="column project-description">
            <h1 className="project">{props.project}</h1>
            <p className="description">{props.description}</p>
        </li>
    );
}

function AudreyLang(props) {
    return (
        <li className="column language-proficiency">
            <h2 className="language">{props.language}</h2>
            <h3 className="proficiency">{props.proficiency}</h3>
            <p className="location">{props.location}</p>
        </li>
    );
}

// App function to return JSX code to build the header and add a button after Header.
function App() {
    function handleThisIsBtnClick(){
        console.log('this button was clicked!');
    }
    return (
        <div className="App">
            <Header/>
            {/*Adding unordered list of projects and their description to load underneath header using reusable props*/}
            <ul className="container">
                <div className="row">
                    <AudreyProjects project="memespace.fun"
                                    description="Full-stack online multiplayer meme-making competition."/>
                    <AudreyProjects project="movie saver"
                                    description="Full-stack website to save movies you've watched, and create a shareable movie list!"/>
                </div>
            </ul>
            <div className="container">
                <ol className="row">
                    <AudreyLang language={AUDREY_LANG[0].language} proficiency={AUDREY_LANG[0].proficiency}
                                location={AUDREY_LANG[0].location}/>
                    <AudreyLang {...AUDREY_LANG[1]} />
                    <AudreyLang {...AUDREY_LANG[2]}/>
                    <AudreyLang {...AUDREY_LANG[3]}/>
                    <AudreyLang {...AUDREY_LANG[4]}/>
                    <AudreyLang {...AUDREY_LANG[5]}/>
                    <AudreyLang {...AUDREY_LANG[6]}/>
                    <AudreyLang {...AUDREY_LANG[7]}/>
                    <AudreyLang {...AUDREY_LANG[8]}/>
                    <AudreyLang {...AUDREY_LANG[9]}/>
                </ol>
            </div>
            <button onClick={handleThisIsBtnClick}>This is a button</button>

        </div>
    );
}

// Exports App function to any other file that imports the function.
export default App;
