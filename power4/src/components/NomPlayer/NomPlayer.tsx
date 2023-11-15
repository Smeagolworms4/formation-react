import {useState} from "react";
import TextField from "../TextField/TextField";

export default function NomPlayer() {

    const [ name, setName ] = useState('no name');
    const [ edit, setEdit ] = useState(false);

    return (
        <div>
            {edit ? (
                <div>
                    <TextField value={name} onInput={setName} />
                    <button onClick={() => setEdit(false)}>valider</button></div>
            ) : (
                <div>{name}<button onClick={() => setEdit(true)}>edit</button></div>
            )}
        </div>
    );
}
