export interface Class {
    name: string;
    image?: string;
    health: number;
    physAttack: number;
    magAttack: number;
    physDefense: number;
    magDefense: number;
}

export interface PlayerStats {
    playerName: string,
    name: string;
    image?: string;
    health: number;
    physAttack: number;
    magAttack: number;
    physDefense: number;
    magDefense: number;
    xp?: number;
}

export interface PlayerProfile {
    playerStats: PlayerStats
    // updateStats: () =>
}

