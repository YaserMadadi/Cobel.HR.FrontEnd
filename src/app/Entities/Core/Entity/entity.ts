import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { RolePermission } from '../RolePermission/rolePermission';
import { Property } from '../Property/property';


@Directive()
export class Entity extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Entity.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Core', 'Entity', 'Entity');

  //endregion

  //#region Fields

	public schema: string = '';
	
	public name: string = '';
	
	public synonym: string = '';
	
  public indexUrl: string = '';

	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfRolePermission: RolePermission[] = [];
	
	public listOfProperty: Property[] = [];

  //#endregion

  
  public get SeekInstance(): Entity {
    return Entity.SeekInstance();
  }

  public static SeekInstance() : Entity {
    let entity: Entity = new Entity();
    entity.isActive = null;
    entity.ResetPaginate();
    return entity;
  }

  public static Validate(entity: Entity) : boolean {
    let result = Validator.Validate(entity.schema) &&
					Validator.Validate(entity.name) &&
					Validator.Validate(entity.synonym);
    if(result === false)
      console.log('Entity is unvalid : ', entity);
    return result;
  }
}