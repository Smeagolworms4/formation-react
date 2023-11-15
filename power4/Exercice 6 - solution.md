```tsx
import {HTMLAttributes} from "react";

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
    return <div className={[
        'c-Grid',
        className,
    ].join(' ')}>
        {[...new Array(row)].map((_, key) => (
            <div key={key}>
                {[...new Array(line)].map((_, key) => (
                    <div key={key}>
                        X
                    </div>
                ))}
            </div>
        ))}
    </div>
}

```
