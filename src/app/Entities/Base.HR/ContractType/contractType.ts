import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Contract } from '../../HR/Contract/contract';


@Directive()
export class ContractType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ContractType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base.HR', 'ContractType', 'ContractType');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfContract: Contract[] = [];

  //#endregion

  
  public get SeekInstance(): ContractType {
    return ContractType.SeekInstance();
  }

  public static SeekInstance() : ContractType {
    let contractType: ContractType = new ContractType();
    contractType.isActive = null;
    contractType.ResetPaginate();
    return contractType;
  }

  public static Validate(contractType: ContractType) : boolean {
    let result = Validator.Validate(contractType.title);
    if(result === false)
      console.log('ContractType is unvalid : ', contractType);
    return result;
  }
}
