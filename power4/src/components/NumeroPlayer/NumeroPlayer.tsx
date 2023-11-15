import {HTMLAttributes, ReactNode} from "react";
import style from './NumeroPlayer.module.scss';

export interface NumeroPlayerProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}


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
