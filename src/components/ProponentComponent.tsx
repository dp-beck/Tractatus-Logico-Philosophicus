import { FC } from "react";
import type { Proposition } from "../PropositionInterface";

interface PropositionComponentProps {
    proposition: Proposition
}

const PropositionComponent: FC<PropositionComponentProps> = ({proposition}) => {
   
    function revealChildren(event: React.MouseEvent) {
        event.stopPropagation();
        if (event.target instanceof HTMLElement)
        {
            event.target.nextElementSibling?.classList.toggle('hidden');
        }
    }

    return (
        <li key={proposition.number}>
            <p onClick={revealChildren}>
                <strong>{proposition.number}. </strong>{proposition.text}
            </p>
            <ul className="hidden">    
                {proposition.subPropositions?.map((subprop) => {
                    return <PropositionComponent proposition={subprop} key={subprop.number} />;
                })}
            </ul>
        </li>
    )

}

export default PropositionComponent;