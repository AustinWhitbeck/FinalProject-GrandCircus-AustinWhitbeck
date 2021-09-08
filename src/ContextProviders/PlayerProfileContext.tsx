import { createContext, ReactNode, useState } from "react"
import { PlayerProfile, PlayerStats } from "../Model/Interfaces";

// export interface PlayerProfile {
//     playerName: string,
//     name: string;
//     image?: string;
//     health: number;
//     physAttack: number;
//     magAttack: number;
//     physDefense: number;
//     magDefense: number;
//     xp?: number;
// }



const defaultPlayerProfile: PlayerProfile = {
        playerStats: {
            playerName: "Default",
            name: "",
            health: 0,
            physAttack: 0,
            physDefense: 0,
            magAttack: 0,
            magDefense: 0,
            xp: 0
        }
};

export const PlayerStatsContext = createContext(defaultPlayerProfile)



export const ItemContextProvider = ({children}: {children: ReactNode}) => {

    const [playerStats, setPlayerStats] = useState<PlayerStats>({
        playerName: "Default",
        name: "",
        health: 0,
        physAttack: 0,
        physDefense: 0,
        magAttack: 0,
        magDefense: 0,
        xp: 0
    });

    // const updateStats = (): void => {
    //     setPlayerStats
    // }


    return (<PlayerStatsContext.Provider value={ {playerStats} }>
        {children}
    </PlayerStatsContext.Provider>)
};