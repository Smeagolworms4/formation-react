import {HTMLAttributes} from "react";
import './Gris.scss';
import Case from "../Case/Case";
import {useGame} from "../GameProvider/GameProvider";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    line?: number,
    row?: number,
}

export function Grid(
    {
        line = 9,
        row = 9,
        className = ''
    }: GridProps
) {

    const {
        grille,
        updateGrille,
    } = useGame();

    return <div className={[
        'c-Grid',
        className,
    ].join(' ')}>
        {[...new Array(row)].map((_, l) => (
            <div key={l}>
                {[...new Array(line)].map((_, r) => (
                    <div key={r} onClick={() => updateGrille(l, r)}>
                        <Case value={grille[l]?.[r] || 0}/>
                    </div>
                ))}
            </div>
        ))}
    </div>
}
