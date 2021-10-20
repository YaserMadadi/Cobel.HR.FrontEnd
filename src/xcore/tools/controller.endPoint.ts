import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Info } from "../Info";
import { Actions } from "../tools/Enum";
import { Result } from "../tools/Result";
import { StorageController } from "../tools/controller.storage";


export enum CompileMode {
    Local,
    LocalSSL,
    Server,
    ServerSSL
}

@Injectable({ providedIn: 'root' })
export abstract class EndPointController {

    protected static ServerIP: string = 'localhost';

    protected static serverPort: number = 44314; //Server:44888; Local:9025

    protected static servicePath: string = '';// '/PortalService'

    protected static protocol: string = 'http'

    public static Mode: CompileMode;

    constructor(public http: HttpClient) {

    }

    public static InitUrl(mode: CompileMode) {
        EndPointController.Mode = mode;
        if (mode == CompileMode.Local) {
            EndPointController.protocol = 'http';
            EndPointController.ServerIP = 'localhost';
            EndPointController.serverPort = 10333;
            EndPointController.servicePath = '';
        } else if (mode === CompileMode.LocalSSL) {
            EndPointController.protocol = 'https';
            EndPointController.ServerIP = 'localhost';
            EndPointController.serverPort = 44337;
            EndPointController.servicePath = '';
        } else if (mode === CompileMode.Server) {
            EndPointController.protocol = 'http';
            EndPointController.ServerIP = 'hrcore.cobeldarou.com'; //172.20.6.118
            EndPointController.serverPort = 20440; // 44888
            EndPointController.servicePath = 'HRServices';
        } else {
            EndPointController.protocol = 'https';
            EndPointController.ServerIP = 'hrcore.cobeldarou.com';
            EndPointController.serverPort = 20440;
            EndPointController.servicePath = 'HRServices';
        }

        if (EndPointController.servicePath.length == 0)
            EndPointController.BaseUrl = `${EndPointController.protocol}://${EndPointController.ServerIP}:${EndPointController.serverPort}/api/`; // 'http://192.168.1.5:44888/PortalService/api';
        else
            EndPointController.BaseUrl = `${EndPointController.protocol}://${EndPointController.ServerIP}:${EndPointController.serverPort}/${EndPointController.servicePath}/api/`; // 'http://192.168.1.5:44888/PortalService/api';

        console.log(`Run in ${CompileMode[mode]} Mode ......... ! `);

        if (mode == CompileMode.Local)
            console.log('Server Url is : ', EndPointController.BaseUrl);

    }

    public static get Options() {
        return { withCredentials: false, headers: EndPointController.Headers };
    }

    private static headers: HttpHeaders = new HttpHeaders();

    public static get Headers(): HttpHeaders {
        if (!this.headers.has('authentication') && StorageController.Token.length > 0) {
            this.headers = this.headers.set('Authorization', 'Bearer ' + StorageController.Token);
        }
        return this.headers;
    }


    // public CreateGetCommand<T extends IBusinessObject | IBusinessObject[]>(url: string): Observable<T> {
    //     return this.http.get<T>(url, {
    //         withCredentials: true,
    //         headers: ServiceConfig.InitHeader()
    //     });
    // }


    // public CreatePostCommand<T extends IBusinessObject, U extends IBusinessObject | IBusinessObject[]>(url: string, entity: T): Observable<U> {
    //     return this.http.post<U>(url, entity, {
    //         withCredentials: true,
    //         headers: ServiceConfig.InitHeader()
    //     });
    // }

    /** BaseUrl on
     * 
     * Server : http://192.168.1.3:44888/Portal/api/          
     * Local  : http://localhost:port/api/
    */

    static BaseUrl: string = '';

    public FullUrl(url: string) {
        if (url.startsWith('/'))
            url = url.substring(1);
        return EndPointController.BaseUrl + url;
    }

    public UrlCreator(action: Actions, info: Info, id: number = 0, targetInfo: Info = null): string {
        let url: string = `${EndPointController.BaseUrl}${info.schema}/${info.name}`;

        switch (action) {
            case Actions.RetrieveAll: {
                url += '/RetrieveAll';
                break;
            }
            case Actions.RetrieveById:{
                url += `/RetrieveById/${id}`;
                break;
            }
            case Actions.Save: {
                url += `/Save`;
                break;
            }
            case Actions.SaveCollection: {
                url += '/SaveCollection';
                break;
            }
            case Actions.SaveAttached: {
                url += '/SaveAttached';
                break;
            }
            case Actions.CollectionOf: {
                url += `/${id}/${targetInfo.name}`;
                break;
            }
            case Actions.Seek: {
                url += '/Seek';
                break;
            }
            case Actions.SeekLast: {
                url += '/Last';
                break;
            }
            case Actions.SeekByValue: {
                url += '/SeekByValue';
                break;
            }
            case Actions.Delete: {
                url += `/Delete/${id}`;
                break;
            }
            case Actions.Report: {
                break;
            }
        }
        return url;
    }

    private static CheckError(error) {
        console.log('err : ', error);
        if (error instanceof HttpErrorResponse) {
            let result: Result = <Result>error.error;
            console.log('Result : ', result);
            if (result && result.id == -100) { //-100 : Authentication Failed!
                console.log('Authentication Error ... ');
                StorageController.Clear();
            }
        }
    }
}