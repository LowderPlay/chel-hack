import { FunctionComponent } from "react";
import ugmc_logo from "../assets/ugmc_logo.svg";
import { ReactSVG } from "react-svg";

const UgmcLogo: FunctionComponent = () => {
    return (
        <div
            className="flex align-middle w-1/2 justify-start pl-8">
            <ReactSVG src={ugmc_logo} />
        </div>
    );
};

export default UgmcLogo;
