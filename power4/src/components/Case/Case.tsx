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
