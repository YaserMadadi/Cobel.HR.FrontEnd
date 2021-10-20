// import { LogService } from "../../../app/Entities/XCode/Log/log.service";
// import { Log } from "../../../app/Entities/XCode/Log/log";
import { Injectable } from "@angular/core";
import { Service } from "../../../service/service";
import { Log } from "../../../../app/Entities/Core/Log/log";
import { API_Operation } from "../../../service/api.operation";
import { EndPointController } from "../../controller.endPoint";
import { ResultData } from "../../ResultData";

@Injectable({ providedIn: 'root' })
export class LogServiceExt extends Service<Log> {

    constructor(api_operation: API_Operation<Log>) {
        super(api_operation, Log.Info);
    }

    loadLog(log: Log): Promise<Log[]> {
        let url = EndPointController.BaseUrl + `Partial/Core/Log/Load/${log.entityName}/${log.recordID}`;
        console.log(url);
        return this.api_operation.http.get<ResultData<Log[]>>(url, {
            withCredentials: false,
            headers: EndPointController.Headers
        }).toPromise<ResultData<Log[]>>().then((data) => {
                console.log('Success : ', data);
                return data.data;
            },
            error => {
                console.log("Error : ", error);
                return Promise.resolve([]);
            });
    }

}