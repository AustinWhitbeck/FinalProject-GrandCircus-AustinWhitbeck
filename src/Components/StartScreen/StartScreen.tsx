import { Link } from 'react-router-dom';
import './StartScreen.css';

const StartScreen = () => {


    return (
        <section className="StartScreenContainer">
            <main className="MainStartWindow">
                <h2>Begin Game</h2>
                <Link to="/CharacterSelect"><button>Start</button></Link>
            </main>
        </section>
    )
};

export default StartScreen;