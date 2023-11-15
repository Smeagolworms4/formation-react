```tsx
import React, {useState} from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import {NumeroPlayer} from "../NumeroPlayer/NumeroPlayer";
import {Grid} from "../Grid/Grid";

function App() {

    const [ row, setRow ] = useState(9);
    const [ line, setLine ] = useState(9);

    return (
        <div className="App">
            <Welcome/>
            <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-between' }}>
                <NumeroPlayer>1</NumeroPlayer>
                <NumeroPlayer>2</NumeroPlayer>
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
            <Grid
                line={line}
                row={row}
            />
        </div>
    );
}

export default App;
```
