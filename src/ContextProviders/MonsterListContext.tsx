import { createContext, ReactNode, useState } from "react"
import {Class} from "../Model/Interfaces";


//**  Interfaces  **//

export interface ClassList {
    masterMonsterList: Class[]
}


// default value
const defaultMonsters: ClassList = {
    masterMonsterList: []
}

export const MonsterStatsContext = createContext(defaultMonsters)


export const ItemContextProvider = ({children}: {children: ReactNode}) => {

    const [masterMonsterList, setMasterClassList] = useState<Class[]>([
        {
            name: "Goblin",
            health: 6,
            physAttack: 2,
            magAttack: 0,
            physDefense: 2,
            magDefense: 2
        },
        {
            name: "Wisp",
            health: 4,
            physAttack: 2,
            magAttack: 4,
            physDefense: 2,
            magDefense: 3
        }
    ]);



return (<MonsterStatsContext.Provider value={ {masterMonsterList} }>
    {children}
</MonsterStatsContext.Provider>)

};