import { Result } from "./Result";

export class ResultData<T> extends Result {
    constructor(id: number = 0, message: string = '', data: T = null) {
        super(id, message);
        this.data = data;
    }


    public data: T = null;

}