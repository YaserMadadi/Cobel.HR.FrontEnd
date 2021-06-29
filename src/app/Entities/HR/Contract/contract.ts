import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Employee } from '../Employee/employee';
import { ContractType } from '../../Base.HR/ContractType/contractType';


@Directive()
export class Contract extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Contract.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Contract', 'Contract');

  //endregion

  //#region Fields

	public employee: Employee = new Employee();
	
	public contractType: ContractType = new ContractType();
	
	public number: string = '';
	
	public fromDate: Date = new Date();
	
	public toDate: Date = new Date();
	
	public isSigned: boolean = false;

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): Contract {
    return Contract.SeekInstance();
  }

  public static SeekInstance() : Contract {
    let contract: Contract = new Contract();
    contract.fromDate = null;
		contract.toDate = null;
		contract.isSigned = null;
    contract.ResetPaginate();
    return contract;
  }

  public static Validate(contract: Contract) : boolean {
    let result = Validator.Validate(contract.employee) &&
					Validator.Validate(contract.contractType) &&
					Validator.Validate(contract.number);
    if(result === false)
      console.log('Contract is unvalid : ', contract);
    return result;
  }
}