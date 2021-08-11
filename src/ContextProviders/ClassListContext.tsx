import { createContext, ReactNode, useState } from "react"


//**  Interfaces  **//

export interface ClassList {
    classes: Class[]
}


export interface Class {
    name: string;
    physAttack: number;
    magAttack: number;
    physDefense: number;
    magDefense: number;
}

//** Default Value  **//

const classMasterList: Class[] = [
    {
        name: "Figher",
        physAttack: 5,
        magAttack: 0,
        physDefense: 4,
        magDefense: 2
    },
    {
        name: "Figher",
        physAttack: 5,
        magAttack: 0,
        physDefense: 4,
        magDefense: 2
    }
]

const defaultValue: Class[] = [
    {
        name: "Figher",
        physAttack: 5,
        magAttack: 0,
        physDefense: 4,
        magDefense: 2
    },
    {
        name: "Figher",
        physAttack: 5,
        magAttack: 0,
        physDefense: 4,
        magDefense: 2
    }
];

export const ItemContext = createContext(defaultValue)


export const ItemContextProvider = ({children}: {children: ReactNode}) => {

    const [masterClassList, setMasterClassList] = useState<Class[]>(defaultValue);

    


return (<ItemContext.Provider value={ masterClassList }>
    {children}
</ItemContext.Provider>)

};