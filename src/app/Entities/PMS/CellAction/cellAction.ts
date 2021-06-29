import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { ScoreCell } from '../ScoreCell/scoreCell';


@Directive()
export class CellAction extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CellAction.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'CellAction', 'Cell Action');

  //endregion

  //#region Fields

	public scoreCell: ScoreCell = new ScoreCell();

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): CellAction {
    return CellAction.SeekInstance();
  }

  public static SeekInstance() : CellAction {
    let cellAction: CellAction = new CellAction();
    // No Item...
    cellAction.ResetPaginate();
    return cellAction;
  }

  public static Validate(cellAction: CellAction) : boolean {
    let result = Validator.Validate(cellAction.scoreCell);
    if(result === false)
      console.log('CellAction is unvalid : ', cellAction);
    return result;
  }
}