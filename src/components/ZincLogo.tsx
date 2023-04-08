import { FunctionComponent } from "react";
import zinc_logo from "../assets/zinc_logo.svg";

const ZincLogo: FunctionComponent = () => {
    return (
        <div
            className="flex align-middle w-1/2 justify-start pl-8">
            <img src={zinc_logo} />
        </div>
    );
};

export default ZincLogo;
