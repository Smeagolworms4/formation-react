import React, {createContext, useState, useContext, ReactNode} from 'react';

// Création du contexte
export const GameContext = createContext({});

export const useGame = () => useContext(GameContext) as {
    grille: Record<number, Record<number,  number>>,
    updateGrille: (x: number, y: number) => any,
    tour: number,
    clearGrille: () => any,
};

export interface GameProviderProps {
    children: ReactNode
}

export default function GameProvider (
    {
        children
    }: GameProviderProps
) {
    const [grille, setGrille] = useState({}); // tableau de tableaux
    const [tour, setTour] = useState(1); // nombre


    const updateGrille = (x: number, y: number) => {
        console.log(x, y);
        const value: any = {...grille};
        value[x] = value[x] || {};
        value[x][y] = tour;
        setGrille(value);
        setTour(tour === 1 ? 2 : 1);
    }

    const clearGrille = () => {
        setGrille({});
    }

    const value = {
        grille,
        updateGrille,
        clearGrille,
        tour,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
