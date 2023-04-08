import { FunctionComponent } from "react";
import { CargoInfo } from "./ShipsTab";
import Button from "./Button";

interface CargoCardProps {
    allowCargo: any;
    declineCargo: any;
    data: CargoInfo;
}
 
const CargoCard: FunctionComponent<CargoCardProps> = (props) => {
    

    return ( 
        <div className="bg-white rounded-[28px] py-8 px-9 mb-8 flex flex-col">
            <span className="text-2xl font-bold mb-4">
                Статус: <span className="text-green " >допущен на досмотр</span>
            </span>
            <div className="flex flex-row">
                <div className="flex flex-col mr-12">
                    <span className="card-span text-lg">Номер пропуска: <span className="card-value">{props.data.id}</span> </span>
                    <span className="card-span text-lg">Авто: <span className="card-value">{props.data.truck}</span></span>
                    <span className="card-span text-lg">ФИО водителя: <span className="card-value">{props.data.driverName}</span></span>
                    <span className="card-span text-lg">Клиент: <span className="card-value">{props.data.recipient}</span></span>
                    <span className="card-span text-lg">Номер КПП: <span className="card-value">{props.data.checkpoint || "КПП №6"}</span></span>
                </div>
                <div className="flex flex-col flex-1">
                    <span className="card-span text-lg">Вид продукции: <span className="card-value">{props.data.stockType}</span> </span>
                    <span className="card-span text-lg">Объём продукции: <span className="card-value">{props.data.weight}</span></span>
                    <span className="card-span text-lg">Единица измерения: <span className="card-value">{props.data.weightUnit}</span></span>
                </div>
            </div>
            <div className="mt-4 gap-x-3 flex-grow-0 flex flex-row self-end w-[600px]">
                <Button onClick={props.allowCargo} slim> Разрешить въезд </Button>
                <Button onClick={props.declineCargo} secondary slim> Отменить </Button>
            </div>
        </div>
     );
}
 
export default CargoCard;