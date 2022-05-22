import { BusinessObject } from "../../business-object";
import { API_Operation } from "../api.operation";
import { HttpErrorResponse } from "@angular/common/http";
import { Result } from "../../tools/Result";
import { MessageController, toastType } from "../../tools/controller.message";
import { IBusinessObject } from "../../business-object.interface";

export class ServiceCollection<T extends BusinessObject> {
    constructor(public api_operation: API_Operation<T>) { }

    public CollectionOf<U extends BusinessObject>(sourcEntity: T, entity: U, extendedPath?: string): Promise<U[]> {

        if (!sourcEntity || sourcEntity.id <= 0) {
            //console.log(`Error in Collection Of ${targetInfo.fullName}..`, entity);
            return Promise.resolve([]);
        }

        return this.api_operation.CollectionOf<U>(sourcEntity, entity, extendedPath)
            .then(resultData => {
                if (!resultData.isSucceeded) {
                    MessageController.ShowMessage(resultData.message, toastType.error);
                    return [];
                }
                return resultData.data;
            },
                error => {
                    console.log(`Error in CollectionOf${entity.info.name} from ${sourcEntity.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, 'بازیابی رکوردهای وابسته');
                    return Promise.resolve([]);
                });
    }

    private errorHandler(error, action: string) {
        if (error instanceof HttpErrorResponse) {

            let result: Result = <Result>error.error;
            console.log('Result in Error Handler : ', result);

            if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            // else if (result && result.sqlMessage && result.sqlMessage.length > 0)
            //     MessageController.ShowMessage(result.sqlMessage, toastType.error);
            else
                MessageController.ShowMessage(`خطا در ${action} اطلاعات : ${error}`, toastType.error);
        } else {
            console.log('Error : ', error);
            MessageController.ShowMessage(`خطا در ${action} اطلاعات`, toastType.error);
        }
    }
}