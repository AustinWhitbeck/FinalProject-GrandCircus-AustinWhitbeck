import { createContext, ReactNode, useState } from "react"
import {Class} from "../Model/Interfaces";


//**  Interfaces  **//

export interface ClassList {
    masterClassList: Class[]
}

const defaultClasses: ClassList = {
    masterClassList: []
}

export const ClassListContext = createContext(defaultClasses)


export const ItemContextProvider = ({children}: {children: ReactNode}) => {

    const [masterClassList, setMasterClassList] = useState<Class[]>([
        {
            name: "Fighter",
            health: 14,
            physAttack: 5,
            magAttack: 0,
            physDefense: 4,
            magDefense: 2
        },
        {
            name: "Wizard",
            health: 10,
            physAttack: 2,
            magAttack: 4,
            physDefense: 1,
            magDefense: 4
        }
    ]);



return (<ClassListContext.Provider value={ {masterClassList} }>
    {children}
</ClassListContext.Provider>)

};