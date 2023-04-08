import zink_logo from "../assets/zinc_logo.svg";
import ugmc_logo from "../assets/ugmc_logo.svg";

export default function Logos() {
    return (
        <div className="flex flex-row justify-center max-w-[28rem] md:w-[28rem] ">
            <div
                id="zink"
                className="flex align-middle w-1/2 justify-end pr-8">
                <img src={zink_logo} />
            </div>
            <div
                id="ugmc"
                className="flex align-middle w-1/2 justify-start pl-8">
                <img src={ugmc_logo} />
            </div>
        </div>
    );
}
