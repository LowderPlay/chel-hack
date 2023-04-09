import { Children, FunctionComponent } from "react";

interface TabTitleProps {
    children: string | string[] | JSX.Element | JSX.Element[];
    value: any;
}

const TabTitle: FunctionComponent<TabTitleProps> = (props) => {
    return (
        <div className="w-auto h-fit  p-6 text-[26px] relative z-20 shadow-[0_2px_12px_0_rgba(0,0,0,0.2)]">
            <span className=" justify-center font-bold">
                {props.children}
                <span className="p-2 text-gray">{props.value}</span>
            </span>
        </div>
    );
};

export default TabTitle;
