import { useContext } from "react";
import { PlayerStatsContext } from "../../ContextProviders/PlayerProfileContext";
import { Class } from "../../Model/Interfaces";




interface Props {
    classOption: Class;
}

const ClassOption = ({classOption}: Props) => {

    const { playerStats } = useContext(PlayerStatsContext);

return (
    <section>
        <h3>{classOption.name}</h3>
        <ul>
            <li>Health: {classOption.health}</li>
            <li>Physical Attack: {classOption.physAttack}</li>
            <li>Physical Defense: {classOption.physDefense}</li>
            <li>Magic Attack: {classOption.magAttack}</li>
            <li>Magic Defense: {classOption.physDefense}</li>
        </ul>
        <button>Select Class</button>
    </section>

)
};

export default ClassOption;