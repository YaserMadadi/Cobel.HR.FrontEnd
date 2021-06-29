import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Relative } from '../../HR/Relative/relative';


@Directive()
export class RelativeType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RelativeType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'RelativeType', 'Relative Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfRelationType_Relative: Relative[] = [];

  //#endregion

  
  public get SeekInstance(): RelativeType {
    return RelativeType.SeekInstance();
  }

  public static SeekInstance() : RelativeType {
    let relativeType: RelativeType = new RelativeType();
    relativeType.isActive = null;
    relativeType.ResetPaginate();
    return relativeType;
  }

  public static Validate(relativeType: RelativeType) : boolean {
    let result = Validator.Validate(relativeType.title);
    if(result === false)
      console.log('RelativeType is unvalid : ', relativeType);
    return result;
  }
}