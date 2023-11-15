# Exercice 1

Installer nodejs:

Windows: https://kinsta.com/fr/blog/comment-installer-node-js/#1-tlcharger-windows-installer
MAC: https://kinsta.com/fr/blog/comment-installer-node-js/#1-tlcharger-le-programme-dinstallation-de-macos
Linux: https://doc.ubuntu-fr.org/nodejs#au_moyen_du_gestionnaire_de_versions_n

Créer un projet react

```shell
npx create-react-app power4 --template typescript
```

Entrer dans le projet:

```shell
cd power4
```

Installer SASS

```shell
npm i -D sass
```

Lancer le projet

```shell
npm run start
```

 - Ouvrir src et créer un dossier `components` et un dossier `components/App`
 - Déplacer App.tsx, App.css et App.test.tsx dans `components/App`

# Exercice 2

Ouvrir `package.json` et aller sur https://craco.js.org/

(Pas besoin dans notre projet de changer mais sera nécéssaire si on veut surcharger webpack)


# Exercice 3

vider App.tsx et App.css

`App.tsx`
```tsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

Renommer index.css en index.scss et remplacer sont contenu par

```scss
html, body {
  width: 100%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body, p, td, tr, li, ul, ol, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
```

# Exercice 4 - Créer des composants sans TSX

Creer un dossier `Welcome` et dedans un fichier `Welcome.tsx`

`Welcome.tsx`

```tsx
import { createElement } from 'react';

export default function Welcome() {
    return createElement(
        'div',
        {
            className: 'c-Welcome'
        },
        'Welcome on ',
        createElement('span', {
            style: { color: 'red' }
        }, 'PUISSANCE 4')
    );
}
```

# Exercice 5 - Créer des composants avec TSX

Créer un composant NumeroPLayer qui affichera "Numero joureur : XXXXX"
Ou XXX est une props children passer en paramètre

 - La props par pour les sous contenue (slot) se nomme toujours `children` ete st de type `ReactNode`

L'insérer 2 fois dans `App.tsx`

```tsx
import React from 'react';
import './App.css';
import Welcome from "../Welcome/Welcome";
import {NumeroPlayer} from "../NumeroPlayer/NumeroPlayer";

function App() {
    return (
        <div className="App">
            <Welcome/>
            <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-between' }}>
                <NumeroPlayer>1</NumeroPlayer>
                <NumeroPlayer>2</NumeroPlayer>
            </div>
        </div>
    );
}

export default App;
```


# Exercice 6 - Créer la grid

Créer un composant grid qui va bloquer pour creer une grille qui par default aura 9x9
Mais row et line seront des parametre de type number.

 - Sur une boucle il faut passer une props key
 - `[...new Array(9)].map((_, key) => (<div key={key}></div>))` Permet de boucler sur des noeuds tsx
 - Rendre optionnel une props comme ceci `line?: number`


# Exercice 7 - Styliser avec un style module

Creer un `NumeroPlayer.module.scss` et brancher le sur votre composant

`NumeroPlayer.module.scss`
```scss
.root {
  padding: 20px;
  border: 1px solid blue;
}
```

`NumeroPlayer.tsx`
```tsx
export function NumeroPlayer(
    {
        children,
        ...rest
    }: NumeroPlayerProps
) {
    return (
        <div className={style.root} {...rest}>Numero player: {children}</div>
    )
}
```

# Exercice 8 - Styliser en globale


Creer un fichier `src/Grid/Grid.scss`

`src/Grid/Grid.scss`
```scss
.c-Grid {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > div {
      width: 100px;
      height: 100px;
      border: 1px solid green;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

```

Et l'insérer dans Grid.tsx

```tsx
import './Gris.scss';
```


# Exercice 9 - useState

Afficher le nombre de ligne et de colonne dans App.tsx

Et deux bouton + et - pour changer les valeurs.
Le brancher sur Grid

 - Pour créer un state suivre se code : `const [ row, setRow ] = useState();`


# Exercice 10 - useEffect, useRef useCallback

Brancher un useRef sur une div qui sera autour de grid;

```tsx
import {Grid} from "./Grid";

const gridRef = useRef<HTMLDivElement>(null);

//....
<div ref={gridRef}>
    <Grid>...</Grid>
</div
```

Créer une function nommer `alertSize` dans useCallback qui permetra d'afficher la taille de la div brancher sur useRef.
Attention elle à une dépendance a gridRef

```tsx
    const alertSize = useCallback(() => {
        setTimeout(() => { // Attend le tick suivant
            if (gridRef.current) {
                alert(`${gridRef.current.clientWidth}x${gridRef.current.clientHeight}`);
            }
        });
    }, [ gridRef ]);
```

Avec useEffect faire un alert au démarage de la page.
```tsx
    useEffect(() => {
        alert('START');
    }, []);
```

Avec Au changement de la grille appeler alertSize
```tsx
    useEffect(() => {
        alertSize();
    }, [ alertSize, row, line ]);
```

Remplacer les alert par des console.log 'Ca suffi les parasitage'

# Exercice 11 - Créer un composant TextField

Nous allons créer Deux composants NomPlayer qui aura un state avec le nom du joueur.
Sur NomPlayer il u aura un bouton editer / valider pour changer le mode 
Et un composant TextField qui pourra podifier se state avec les props value et onInput

`NomPlayer.tsx`

```tsx
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
```

`TextField.tsx`
```tsx
import {FormEvent, InputHTMLAttributes, ReactNode} from "react";

export interface TextFieldProps {
    label?: ReactNode,
    value: string,
    onInput: (value: string, event: FormEvent<HTMLInputElement>) => any,
    input?: InputHTMLAttributes<HTMLInputElement>
}
export default function TextField(
    {
        label,
        value,
        onInput,
        input = {},
    }: TextFieldProps
) {
    return (
        <div>
            {!!label && <label>{label}</label>}
            <input
                value={value}
                onInput={(event) => onInput((event.target as HTMLInputElement).value || '', event)}
            />
        </div>
    )
}
```


Brancher NomPlayer en dessous de NumeroPlayer dans App.tsx
```tsx
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
```

# Exercice 12 - CreateContext et Provide

Pour commencer creer un composant simple nommer Case qui aura une prop `value` de 0 a 2
 - Si 0 ne rien afficher 
 - Si 1 Afficher un rond jaune
 - Si 2 Afficher un rond rouge

le brancher à la place des X dans grid (value 1 pour le moment)

# Exercice 12.2

Créer un context global qui aura la matrix des valeur de la grille et le tour du joueur

`components/GameProvider/GameProvider.tsx`
```tsx
import React, {createContext, useState, useContext, ReactNode} from 'react';

// Création du contexte
import React, {createContext, useState, useContext, ReactNode} from 'react';

// Création du contexte
export const GameContext = createContext({});

export const useGame = () => useContext(GameContext) as {
    grille: Record<number, Record<number,  number>>,
    updateGrille: (x: number, y: number) => any,
    tour: number,
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

    const value = {
        grille,
        updateGrille,
        tour,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
```

Le brancher sur App.tsx à la racine: 

```tsx
   return (
        <GameProvider>
            <div className="App">
                [...]
            </div>
        </GameProvider>
    );
```

Brancher sur grille les modifs du context global

```tsx
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
```

# Exercice 13

Créer un composant qui affiche le tour courent et avec un bouton pour reset la grille
