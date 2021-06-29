import { Info } from "./Info";
import { BusinessObject } from "./business-object";

export interface IBusinessObject<T extends BusinessObject> {

    newInstance(): T;

    id: number;

    descriptor: string;

    fullDescriptor: string;

    timeStamp: string;

    info: Info;

    isNew: boolean;

    SeekInstance: T;

    //ResetPaginate();
}