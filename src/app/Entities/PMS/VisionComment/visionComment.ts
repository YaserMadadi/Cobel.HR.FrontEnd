import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Vision } from '../Vision/vision';
import { Employee } from '../../HR/Employee/employee';


@Directive()
export class VisionComment extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = VisionComment.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('PMS', 'VisionComment', 'Vision Comment');

  //endregion

  //#region Fields

	public vision: Vision = new Vision();
	
	public time: Date = new Date();
	
	public commentator: Employee = new Employee();
	
	public title: string = '';
	
	public content: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): VisionComment {
    return VisionComment.SeekInstance();
  }

  public static SeekInstance() : VisionComment {
    let visionComment: VisionComment = new VisionComment();
    visionComment.time = null;
    visionComment.ResetPaginate();
    return visionComment;
  }

  public static Validate(visionComment: VisionComment) : boolean {
    let result = Validator.Validate(visionComment.vision) &&
					Validator.Validate(visionComment.commentator) &&
					Validator.Validate(visionComment.title) &&
					Validator.Validate(visionComment.content);
    if(result === false)
      console.log('VisionComment is unvalid : ', visionComment);
    return result;
  }
}