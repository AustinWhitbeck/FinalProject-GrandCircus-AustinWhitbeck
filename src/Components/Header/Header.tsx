import { useContext } from 'react';
import { PlayerStatsContext } from '../../ContextProviders/PlayerProfileContext';
import './Header.css';

const Header = () => {
    
    const { playerStats } = useContext(PlayerStatsContext);
    console.log(playerStats.playerName);
    return (
            <header className="Header">
                <div className="TitleContainer">
                    <h1>Game Title</h1>
                </div>
                <div>
                    <h3>Player Profile: {playerStats.playerName}</h3>
                </div>
            </header>
    );
}

export default Header;