import { OnInit, Directive } from '@angular/core';

import { IBusinessObject } from './business-object.interface';
import { Paginate } from './tools/paginate';
import { Info } from './Info';



@Directive()
export class BusinessObject implements OnInit, IBusinessObject<BusinessObject> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = new Info()) {
    this.id = id;
    this.descriptor = descriptor;
    this.info = info;
    //this.paginate = new Paginate();
  }

  ngOnInit() {
    this.descriptor = this.info.title;
  }

  public static readonly Info: Info = new Info('dbo', 'BusinessObject', '');

  public id: number;

  public descriptor: string = '';

  public fullDescriptor: string = '';

  public timeStamp: string = '';

  public info: Info = new Info('', '');

  public paginate: Paginate = new Paginate();

  public get isNew(): boolean {
    return this.id == 0;
  }

  public newInstance(): BusinessObject {
    return new BusinessObject();
  }

  public get SeekInstance(): BusinessObject {
    return BusinessObject.SeekInstance();
  }

  public static SeekInstance() : BusinessObject {
    return new BusinessObject();
  }

  public ResetPaginate() {
    this.paginate = new Paginate();  
  }

  /**
   * Confirm to entity is not (!=) Null
   * @param entity : is a BusinessObject.
   */
  public static Confirm(entity: BusinessObject | BusinessObject[]): boolean {
    if (Array.isArray(entity))
      return entity?.length > 0; // entity !== undefined && entity !== null && entity.length > 0;
    else
      return entity?.id > 0; //entity !== undefined && entity !== null && entity.id > 0;
  }



  /**
   * Confirm that an entity is (==) Null
   */
  public static NotConfirm(entity: BusinessObject | BusinessObject[]): boolean {
    return !this.Confirm(entity);// || entity === undefined || entity === null || entity.id === 0;
  }


  public static ToList<T extends BusinessObject>(entity: T): T[] {
    if (this.Confirm(entity))
      return [entity];
    return [];
  }

}
