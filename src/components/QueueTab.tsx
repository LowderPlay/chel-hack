import { FunctionComponent } from "react";
import TabTitle from "./TabTitle";
import { useQuery } from "react-query";
import { QUEUE, fn } from "../Contraints";

interface QueueTabProps {
    token: string;
}

const QueueTab: FunctionComponent<QueueTabProps> = (props) => {
    let { data, isFetched } = useQuery({
        refetchInterval: 5000,
        queryKey: ["queue"],
        queryFn: () => fn(QUEUE, props.token, null, "GET"),
    });
    return (
        <div className="flex flex-col max-h-[calc(100vh-4rem)]">
            <TabTitle value={data?.length}>Очередь &nbsp;</TabTitle>
            <div className=" bg-gray-light  overflow-scroll h-auto flex-1 relative z-10 py-7 px-8 ">
                <div className="bg-white rounded-md py-4 px-2 pb-6">
                    <table className="mx-8 gap-4 w-[94%] text-left">
                        <thead>
                            <tr className="bg-gray/[0.3] border-solid border-b-[1px] border-gray">
                                <th className="py-3 pl-5 font-normal">№</th>
                                <th className="font-normal">
                                    Номер пропуска
                                </th>
                                <th className="font-normal">Номер авто</th>
                                <th className="font-normal">ФИО водителя</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isFetched ? (
                                data?.map((el: any, i: number) => (
                                    <tr
                                        key={el.id}
                                        className="border-solid border-b-[1px] border-gray font-light">
                                        <td className="pl-5 py-4">{i + 1}</td>
                                        <td className="">{el.id}</td>
                                        <td>{el.truck}</td>
                                        <td>{el.driverName}</td>
                                    </tr>
                                ))
                            ) : (
                                // TODO LOADING
                                <></>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default QueueTab;
