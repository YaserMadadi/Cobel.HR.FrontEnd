import { Result } from '../../tools/Result';
import { PermissionType } from '../../tools/Enum';
import { BusinessObject } from '../../business-object';
import { Info } from '../../Info';


export interface IService<T extends BusinessObject> {

    CreateInstance() : T;

    CreateSeekInstance() : T;

    Save(entity: T): Promise<T>;

    SaveCollection(listOfEntity: T[]): Promise<Result>;

    SaveAttached(entity: T): Promise<T>;

    RetrieveById(id: number): Promise<T>;

    RetrieveAll(): Promise<T[]>;

    Delete(entity: T): Promise<boolean>;

    Seek(entity: T): Promise<T[]>;

    SeekByValue(value: string): Promise<T[]>;

    Navigate(info: Info, id: number, permissionType: PermissionType);
}