import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Assessor } from '../Assessor/assessor';
import { ConnectionType } from '../../Base/ConnectionType/connectionType';


@Directive()
export class AssessorConnectionLine extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AssessorConnectionLine.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('LAD', 'AssessorConnectionLine', 'Assessor Connection Line');

  //endregion

  //#region Fields

	public assessor: Assessor = new Assessor();
	
	public connectionType: ConnectionType = new ConnectionType();
	
	public number: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): AssessorConnectionLine {
    return AssessorConnectionLine.SeekInstance();
  }

  public static SeekInstance() : AssessorConnectionLine {
    let assessorConnectionLine: AssessorConnectionLine = new AssessorConnectionLine();
    // No Item...
    assessorConnectionLine.ResetPaginate();
    return assessorConnectionLine;
  }

  public static Validate(assessorConnectionLine: AssessorConnectionLine) : boolean {
    let result = Validator.Validate(assessorConnectionLine.assessor) &&
					Validator.Validate(assessorConnectionLine.connectionType) &&
					Validator.Validate(assessorConnectionLine.number);
    if(result === false)
      console.log('AssessorConnectionLine is unvalid : ', assessorConnectionLine);
    return result;
  }
}