import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Conclusion } from '../Conclusion/conclusion';


@Directive()
export class ConclusionType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConclusionType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'ConclusionType', 'Conclusion Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfConclusion: Conclusion[] = [];

  //#endregion

  
  public get SeekInstance(): ConclusionType {
    return ConclusionType.SeekInstance();
  }

  public static SeekInstance() : ConclusionType {
    let conclusionType: ConclusionType = new ConclusionType();
    conclusionType.isActive = null;
    conclusionType.ResetPaginate();
    return conclusionType;
  }

  public static Validate(conclusionType: ConclusionType) : boolean {
    let result = Validator.Validate(conclusionType.title);
    if(result === false)
      console.log('ConclusionType is unvalid : ', conclusionType);
    return result;
  }
}