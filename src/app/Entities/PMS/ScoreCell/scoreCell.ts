import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { CellAction } from '../CellAction/cellAction';


@Directive()
export class ScoreCell extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ScoreCell.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'ScoreCell', 'Score Cell');

  //endregion

  //#region Fields

	public cellNumber: string = '';
	
	public min_X: number = 0;
	
	public max_X: number = 0;
	
	public min_Y: number = 0;
	
	public max_Y: number = 0;
	
	public min_Pi: number = 0;
	
	public max_Pi: number = 0;

	//#endregion

  //#region Collection Properties

  public listOfOperationalAppraise: OperationalAppraise[] = [];
	
	public listOfNonOperationalAppraise: NonOperationalAppraise[] = [];
	
	public listOfCellAction: CellAction[] = [];

  //#endregion

  
  public get SeekInstance(): ScoreCell {
    return ScoreCell.SeekInstance();
  }

  public static SeekInstance() : ScoreCell {
    let scoreCell: ScoreCell = new ScoreCell();
    // No Item...
    scoreCell.ResetPaginate();
    return scoreCell;
  }

  public static Validate(scoreCell: ScoreCell) : boolean {
    let result = Validator.Validate(scoreCell.cellNumber);
    if(result === false)
      console.log('ScoreCell is unvalid : ', scoreCell);
    return result;
  }
}