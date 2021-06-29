// // import { LogService } from "../../../app/Entities/XCode/Log/log.service";
// // import { Log } from "../../../app/Entities/XCode/Log/log";
// import { Injectable } from "@angular/core";
// import { Service } from "../../../service/service";
// import { Log } from "../../../../app/Entities/Core/Log/log";
// import { API_Operation } from "../../../service/api.operation";
// import { EndPointController } from "../../controller.endPoint";

// @Injectable({ providedIn: 'root' })
// export class LogServiceExt extends Service<Log> {

//     constructor(api_operation: API_Operation<Log>) {
//         super(api_operation, Log.Info);
//     }

//     loadLog(log: Log): Promise<Log[]> {
//         let url = EndPointController.BaseUrl + `XCode/Log/Load/${log.entityName}/${log.recordID}`;
//         return this.api_operation.http.get<Log[]>(url, {
//             withCredentials: false,
//             headers: EndPointController.Headers
//         }).toPromise<Log[]>().then((data) => {
//                 return data;
//             },
//             error => {
//                 console.log("Error : ", error);
//                 return Promise.resolve(null);
//             });
//     }

// }