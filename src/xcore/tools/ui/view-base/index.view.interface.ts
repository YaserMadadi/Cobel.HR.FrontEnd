import { BusinessObject } from "../../../business-object";

export interface IIndexView<t extends BusinessObject> {

    resetFilter(): void;

    onRefresh(): void;
}