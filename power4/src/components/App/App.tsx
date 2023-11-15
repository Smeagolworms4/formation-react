import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import {NumeroPlayer} from "../NumeroPlayer/NumeroPlayer";
import {Grid} from "../Grid/Grid";
import NomPlayer from "../NomPlayer/NomPlayer";
import GameProvider from "../GameProvider/GameProvider";
import CurrentGame from "../CurrentGame/CurrentGame";

function App() {

    const [ row, setRow ] = useState(9);
    const [ line, setLine ] = useState(9);

    const gridRef = useRef<HTMLDivElement>(null);

    const alertSize = useCallback(() => {
        setTimeout(() => { // Attend le tick suivant
            if (gridRef.current) {
                console.log(`${gridRef.current.clientWidth}x${gridRef.current.clientHeight}`);
            }
        });
    }, [ gridRef ]);

    useEffect(() => {
        console.log('START');
    }, []);

    useEffect(() => {
        alertSize();
    }, [ alertSize, row, line ]);

    return (
        <GameProvider>
            <div className="App">
                <Welcome/>
                <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-between' }}>
                    <div>
                        <NumeroPlayer>1</NumeroPlayer>
                        <NomPlayer />
                    </div>
                    <div>
                        <NumeroPlayer>2</NumeroPlayer>
                        <NomPlayer />
                    </div>
                </div>
                <div>
                    <div>
                        Line: {line}
                        <button onClick={() => setLine(state => state + 1)}>+</button>
                        <button onClick={() => setLine(state => state - 1)}>-</button>
                    </div>
                    <div>
                        Row: {row}
                        <button onClick={() => setRow(row + 1)}>+</button>
                        <button onClick={() => setRow(row - 1)}>-</button>
                    </div>
                </div>
                <CurrentGame/>
                <div ref={gridRef}>
                    <Grid
                        line={line}
                        row={row}
                    />
                </div>
            </div>
        </GameProvider>
    );
}

export default App;
