```tsx
import {HTMLAttributes, ReactNode} from "react";

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
        <div {...rest}>Numero player: {children}</div>
    )
}
```
