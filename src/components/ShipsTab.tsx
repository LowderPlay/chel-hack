import { FunctionComponent } from "react";
import CargoCard from "./CargoCard";
import TabTitle from "./TabTitle";
import { API_URL, DELIVERY, SECURITY, fn } from "../Contraints";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface ShipsTabProps {
    token: string;
}

export type CargoInfo = {
    id: number;
    truck: string;
    driverName: string;
    recipient: string;
    weight: number;
    weightUnit: WeightUnit;
    stockType: string;
    checkpoint: "КПП №6";
};

export enum WeightUnit {
    TONNE,
    KILOGRAM,
}

const ShipsTab: FunctionComponent<ShipsTabProps> = (props) => {
    const queryClient = useQueryClient();

    let { data, isFetched } = useQuery({
        enabled: true,

        queryKey: ["delivery"],
        refetchInterval: 5000,
        queryFn: () => fn(DELIVERY, props.token, null, "GET"),
    });

    let { mutate } = useMutation(
        {
            mutationFn: ({ id, type }: { id: string; type: "checkpoint" | "reject" }) =>
                fn(SECURITY + type, props.token, { id }),
            onSuccess: (data) => {
                // setTimeout(() => {
                //     queryClient.invalidateQueries({
                //         queryKey: ["delivery"],
                //     });
                //     queryClient.invalidateQueries({
                //         queryKey: ["queue"],
                //     });
                // },  400);
                queryClient.invalidateQueries({
                    queryKey: ["delivery"],
                });
                queryClient.invalidateQueries({
                    queryKey: ["queue"],
                });
            },
        },
    );

    return (
        <div className="flex flex-col max-h-[calc(100vh-4rem)]">
            <TabTitle value={data?.length}>
                Допущены на досмотр &nbsp;
            </TabTitle>
            <div className="bg-gray-light overflow-scroll h-auto flex-1 relative z-10 px-12 pt-7">
                {isFetched ? (
                    data?.map((el: any) => (
                        <CargoCard
                            key={el.id}
                            declineCargo={() =>
                                mutate({ id: el.id, type: "reject" })
                            }
                            allowCargo={() =>
                                mutate({ id: el.id, type: "checkpoint" })
                            }
                            data={el}
                        />
                    ))
                ) : (
                    // TODO LOADING
                    <span>LOADING...</span>
                )}
            </div>
        </div>
    );
};

export default ShipsTab;
