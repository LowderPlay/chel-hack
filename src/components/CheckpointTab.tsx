import { FunctionComponent } from "react";
import { ReactSVG } from "react-svg";

interface CheckpointMenuTabProps {
    label: string;
    icon: string;
    active: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
 
const CheckpointMenuTab: FunctionComponent<CheckpointMenuTabProps> = (props) => {
    
    return ( 
        <div onClick={props.onClick} className={(props.active ? "border-blue bg-sky " : "border-none hover:bg-sky") +
        " border-r-[3px] flex flex-row max-w-[330px] h-[40px] cursor-pointer"}>
            <ReactSVG className={(props.active ? "fill-blue" : "fill-black-light") +
                " min-w-8 max-h-8 px-4 py-1"} src={props.icon} />
            <span className={ (props.active ? "text-blue" : "") + " self-center flex-1 font-bold"} >
                {props.label}
            </span>
        </div>
     );
}
 
export default CheckpointMenuTab;