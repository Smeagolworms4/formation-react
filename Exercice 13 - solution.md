`GameProvider.tsx`
```tsx

    //...

    export const useGame = () => useContext(GameContext) as {
        grille: Record<number, Record<number,  number>>,
        updateGrille: (x: number, y: number) => any,
        tour: number,
        clearGrille: () => any,
    };

    //...

    const clearGrille = () => {
        setGrille({});
    }

    const value = {
        grille,
        updateGrille,
        clearGrille,
        tour,
    };
    
    //...

```

```tsx
import {useGame} from "../GameProvider/GameProvider";

export default function CurrentGame() {

    const { tour, clearGrille } = useGame();

    return (
        <div>
            Au joueur {tour} de jouer
            <button onClick={() => clearGrille()}>RESET</button>
        </div>
    )
}
```
