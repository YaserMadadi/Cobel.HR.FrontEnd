import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessObject } from '../business-object';
import { Info } from '../Info';
import { MessageController, toastType } from '../tools/controller.message';
import { Result } from '../tools/Result';
import { API_Operation } from './api.operation';
import { PermissionResult, PermissionType } from '../tools/Enum';
import { IService } from './base/service.interface';
import { PermissionController } from '../tools/controller.permission';


@Injectable({ providedIn: 'root' })
export class Service<T extends BusinessObject> implements IService<T> {

    public router: Router;
    public activatedRoute: ActivatedRoute;
    public info: Info;

    constructor(public api_operation: API_Operation<T>, info: Info) {
        this.router = this.api_operation.router;
        this.activatedRoute = this.api_operation.activatedRoute;
        this.info = info;
    }

    //#region Permission
    CheckPermission(permissionType: PermissionType): PermissionResult {
        return PermissionResult.Granted;
    }
    //#endregion Permission


    //#region   Commands
    public Save(entity: T): Promise<T> {
        entity.info = this.info;
        return this.api_operation.Save(entity)
            .then(
                entity => {
                    MessageController.ShowMessage('Save Successfully done...', toastType.success);
                    return entity;
                },
                error => {
                    this.errorHandler(error, 'Saving Command');
                    return <T>new BusinessObject(-1);
                });
    }

    public SaveCollection(list: T[]): Promise<Result> {
        if (list.length == 0)
            return Promise.resolve(new Result(0, ''));
        return this.api_operation.SaveCollection(list, this.info)
            .then(
                result => result,
                error => {
                    this.errorHandler(error, 'BulkSaving Command');
                    return Promise.resolve(new Result(-1, error));
                });
    }

    public SaveAttached(entity: T): Promise<T> {
        return this.api_operation.SaveAttached(entity)
            .then(
                entity => {
                    console.log(entity);
                    MessageController.ShowMessage('Save Entity and All Related Successfully done...', toastType.success);
                    return entity;
                },
                error => {
                    this.errorHandler(error, 'Saving Command');
                    return <T>new BusinessObject(-1);
                });
    }

    public RetrieveById(id: number): Promise<T> {
        return this.api_operation.RetrieveById(id, this.info)
            .then(
                entity => entity,
                error => {
                    this.errorHandler(error, 'RetrieveById');
                    return Promise.resolve(null);
                });
    }

    public RetrieveAll(): Promise<T[]> {
        return this.api_operation.RetrieveAll(this.info)
            .then(
                list => {
                    return Promise.resolve(list);
                },
                error => {
                    console.log(`Error : [${this.info.schema}].[${this.info.name}]`);
                    this.errorHandler(error, 'RetrieveAll')
                    return Promise.resolve([]);
                });
    }

    public Seek(entity: T): Promise<T[]> {
        return this.api_operation.Seek(entity)
            .then(
                list => {
                    return list;
                },
                error => {
                    console.log(`Error in Seek : ${entity.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, 'Seek');
                    return Promise.resolve([]);
                });
    }

    public SeekByValue(value: string): Promise<T[]> {
        if (typeof value === 'string' && value.trim().length < 2)
            return Promise.resolve([]);

        return this.api_operation.SeekByValue(value, this.info)
            .then(
                (list: T[]) => Promise.resolve(list),
                error => {
                    console.log(`Error in SeekByValue : ${this.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, 'Seek By Value');
                    return Promise.resolve([]);
                });
    }

    public SeekLast(entity: T): Promise<T> {
        return this.api_operation.SeekLast(entity)
            .then(
                entity => entity,
                error => {
                    console.log(`Error in Delete : ${entity.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, 'Seek Last');
                    return Promise.resolve(null);
                });
    }

    public Delete(entity: T): Promise<boolean> {
        return this.api_operation.Delete(entity)
            .then(
                result => {
                    if (result.id <= 0) {
                        MessageController.ShowMessage(result.message, toastType.error);
                        return false;
                    }
                    MessageController.ShowMessage(result.message, toastType.success);
                    return true;
                },
                error => {
                    this.errorHandler(error, 'Delete');
                    console.log('Error in Delete : ', error);
                    return false;
                });
    }

    //#endregion    Commands

    //#region CollectionOf Command
    protected CollectionOf<U extends BusinessObject>(sourcEntity: T, entity: U, extendedPath?: string): Promise<U[]> {

        if (BusinessObject.NotConfirm(sourcEntity))
            return Promise.resolve([]);

        return this.api_operation.CollectionOf<U>(sourcEntity, entity, extendedPath)
            .then(list => list,
                error => {
                    console.log(`Error in CollectionOf${entity.info.name} from ${sourcEntity.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, `Retrieve CollectionOf<${entity.info.name}}>`);
                    return Promise.resolve([]);
                });
    }
    //#endregion    CollectionOf Command


    protected LoadFactory<U extends BusinessObject>(entity: T, info: Info): Promise<U> {
        return this.api_operation.LoadFactory<U>(entity, info);
    }

    private errorHandler(error, action: string) {
        if (error instanceof HttpErrorResponse) {
            console.log('Action : ', action, error);
            let result: Result = <Result>error.error;
            console.log('Result in Error Handler : ', result);

            if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            else if (result && result.sqlMessage && result.sqlMessage.length > 0)
                MessageController.ShowMessage(result.sqlMessage, toastType.error);
            else
                MessageController.ShowMessage(`Error in ${action} • More Details : ${error}`, toastType.error);
        } else {
            console.log('Error : ', error);
            MessageController.ShowMessage(`Error in ${action} • More details : `, toastType.error);
        }
    }

    Navigate(info: Info, id: number = 0, permissionType: PermissionType): boolean {
        if (PermissionController.Check(info, permissionType) === PermissionResult.Denied)
            return false;
        this.router.navigate([info.schema, info.name, id]);
        return true;
    }
}