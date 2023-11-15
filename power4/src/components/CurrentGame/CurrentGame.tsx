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
