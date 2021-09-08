import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClassListContext } from "../../ContextProviders/ClassListContext";
import { PlayerStatsContext } from "../../ContextProviders/PlayerProfileContext";
import ClassOption from "../ClassOptions/ClassOption";
import "./CharacterSelect.css";


const CharacterSelect = () => {

    const {masterClassList} = useContext(ClassListContext);
    const { playerStats } = useContext(PlayerStatsContext);
    const [tempProfile, setTempProfile] = useState({
    playerName: "Default",
    name: "",
    health: 0,
    physAttack: 0,
    physDefense: 0,
    magAttack: 0,
    magDefense: 0,
    xp: 0
    }
    );

    let TempName = '';

    

   

    return (
        <main className="MainCharSelect">
            <h3>Character Select</h3>
            <section className="CurrentCharacterSelectSection">
                <h4>Current Character</h4>
                <ul>
                    <li>Name: {playerStats.playerName}</li>
                    <li>Class: {playerStats.name}</li>
                    <li>Health: {playerStats.health}</li>
                    <li>Physical Attack: {playerStats.physAttack}</li>
                    <li>Physical Defense: {playerStats.physDefense}</li>
                    <li>Magic Attack: {playerStats.magAttack}</li>
                    <li>Magic Defense: {playerStats.physDefense}</li>
                </ul>

            </section>
            <section>
                <form action="submit">
                    <label htmlFor="PlayerNameSelect">Character Name</label>
                    <input type="text" id="PlayerNameSelect" name="PlayerNameSelect" />
                </form>

            </section>
            <section className="class-selection-section">
                {masterClassList.map((classOption, index) => 
                    <ClassOption
                        key={`${classOption.name}-${index}`}
                        classOption={classOption}
                    />
                )}
            </section>
            <Link to="/">
                <button type="button">Back to start</button>
            </Link>
        </main>
    );

}

export default CharacterSelect;