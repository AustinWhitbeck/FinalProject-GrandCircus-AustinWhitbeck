import { useContext } from "react";
import { ItemContext } from "../../ContextProviders/ClassListContext";


const CharacterSelect = () => {

    const {masterClassList} = useContext(ItemContext);

    return (
        <main>
            <h3>Character Select</h3>
        </main>
    );

}

export default CharacterSelect;