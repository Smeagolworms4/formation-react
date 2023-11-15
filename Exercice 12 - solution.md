```tsx
import './Case.scss';

export interface CaseProps {
    value: number;
}
export default function Case(
    {
        value = 0
    }: CaseProps
) {
    return <div className={`c-Case c-Case--${value}`}></div>
}
```
```scss
.c-Case {

  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;

  &--1 {
    background-color: yellow;
    border: 15px solid rgba(0,0,0,0.2);
  }
  &--2 {
    background-color: red;
    border: 15px solid rgba(0,0,0,0.2);
  }
}
```
