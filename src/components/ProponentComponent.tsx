import { FC } from "react";
import type { Proposition } from "../PropositionInterface";

interface PropositionComponentProps {
    proposition: Proposition
}

const PropositionComponent: FC<PropositionComponentProps> = ({proposition}) => {
    return (
        <li key={proposition.number}>
            <p><strong>{proposition.number}. </strong>{proposition.text}</p>
        <ul>    
            {proposition.subPropositions?.map((subprop) => {
                return <PropositionComponent proposition={subprop} key={subprop.number} />;
            })}
        </ul>
        </li>
    )

}

export default PropositionComponent;