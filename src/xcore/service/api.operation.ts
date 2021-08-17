//import { Http, Headers, RequestOptions, Response, RequestOptionsArgs, ResponseContentType } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { BusinessObject } from "../business-object";
import { IBusinessObject } from "../business-object.interface";
import { Info } from "../Info";
import { EndPointController } from "../tools/controller.endPoint";
import { Actions } from "../tools/Enum";
import { Paginate } from "../tools/paginate";
import { Result } from "../tools/Result";
import { ResultData } from "../tools/ResultData";



@Injectable({ providedIn: 'root' })
export class API_Operation<T extends BusinessObject> extends EndPointController {

  constructor(
    public http: HttpClient,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
    super(http);
  }


  // private options = {
  //   withCredentials: false,
  //   headers: EndPointManager.Headers
  // };

  GetCommand<T>(url:string) : Promise<T>{
    var command = this.http.get<ResultData<T>>(url, EndPointController.Options).toPromise<ResultData<T>>();

    return command.then(dataResult =>{
        return dataResult.data;
      },
      errpr => {
        return null;
      });

  }

  RetrieveAll(info: Info): Promise<ResultData<T[]>> { 
    let url = this.UrlCreator(Actions.RetrieveAll, info);
    return this.http.post<ResultData<T[]>>(url, new Paginate(40, 1), EndPointController.Options).toPromise<ResultData<T[]>>();
  }

  RetrieveById(id: number, info: Info): Promise<ResultData<T>> {
    let url = this.UrlCreator(Actions.RetrieveById, info, id);
    return this.http.get<ResultData<T>>(url, EndPointController.Options).toPromise<ResultData<T>>();
  }

  Save(entity: T): Promise<ResultData<T>> {
    let url = this.UrlCreator(Actions.Save, entity.info, entity.id);//super.FullUrl(`${entity.info.schema}/${entity.info.name}/${entity.id}`);
    
    return this.http.post<ResultData<T>>(url, entity, EndPointController.Options).toPromise<ResultData<T>>();
  }

  SaveAttached(entity: T): Promise<ResultData<T>> {
    let url = this.UrlCreator(Actions.SaveAttached, entity.info);
    return this.http.post<ResultData<T>>(url, entity, EndPointController.Options).toPromise<ResultData<T>>();
  }

  SaveCollection(list: T[], info: Info): Promise<Result> {
    let url = this.UrlCreator(Actions.SaveCollection, info);
    return this.http.post<Result>(url, list, EndPointController.Options).toPromise<Result>();
  }

  Delete(entity: T): Promise<Result> {
    let url = this.UrlCreator(Actions.Delete, entity.info, entity.id);
    return this.http.post<Result>(url, entity, EndPointController.Options).toPromise<Result>();
  }

  Seek(entity: T): Promise<ResultData<T[]>> {
    let url = this.UrlCreator(Actions.Seek, entity.info);
    return this.http.post<ResultData<T[]>>(url, entity, EndPointController.Options).toPromise<ResultData<T[]>>();
  }

  SeekLast(entity: T): Promise<ResultData<T>> {
    let url = this.UrlCreator(Actions.SeekLast, entity.info);
    return this.http.post<ResultData<T>>(url, entity, EndPointController.Options).toPromise<ResultData<T>>();
  }

  SeekByValue(value: string, info: Info): Promise<ResultData<T[]>> {
    let url = this.UrlCreator(Actions.SeekByValue, info) + `/${value}`;
    return this.http.get<ResultData<T[]>>(url, EndPointController.Options).toPromise<ResultData<T[]>>();
  }

  CollectionOf<U extends BusinessObject>(sourcEntity: T, entity: U, extendedPath: string = ''): Promise<ResultData<U[]>> {

    if (extendedPath === '' || extendedPath.length === 0)
      extendedPath = sourcEntity.info.name;


    let url = `${API_Operation.BaseUrl}${sourcEntity.info.schema}/${extendedPath}/${sourcEntity.id}/${entity.info.name}`;

    return this.http
      .post<ResultData<U[]>>(url, entity, EndPointController.Options)
      .toPromise<ResultData<U[]>>();
  }

  LoadFactory<U extends BusinessObject>(entity: T, info: Info): Promise<U> {
    let url = `${API_Operation.BaseUrl}${entity.info.schema}/${entity.info.name}/${entity.id}/${info.name}`;
    return this.http.get<U>(url, EndPointController.Options).toPromise<U>();
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }




  // RetrieveReport(entity: T): Observable<T[]> {
  //   let url = this.UrlCreator(Actions.Report, entity.info);
  //   return this.http.put<T[]>(url, entity,
  //     {
  //       withCredentials: true,
  //       headers: EndPointManager.InitHeader()
  //     });
  // }

  // CallExtendedMethod<T extends BusinessObject>(url: string): Observable<T[]> {
  //   url = EndPointManager.BaseUrl + url;
  //   return this.http.get<T[]>(url, this.options);
  // }
}
