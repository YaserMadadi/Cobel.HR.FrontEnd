import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { PromotionAssessment } from '../../LAD/PromotionAssessment/promotionAssessment';
import { ConfigTargetSetting } from '../../PMS/ConfigTargetSetting/configTargetSetting';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';
import { RotationAssessment } from '../../LAD/RotationAssessment/rotationAssessment';
import { Level } from '../Level/level';
import { Unit } from '../Unit/unit';
import { PositionCategory } from '../PositionCategory/positionCategory';


@Directive()
export class Position extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number, descriptor: string, info: Info, recursive: boolean);
  constructor(id: number = 0, descriptor: string = '', info: Info = Position.Info, recursive: boolean = true) {
	
    super(id, descriptor, info);
    if (recursive === true) 
      this.parent = new Position(id, descriptor, info, false);
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Position', 'Position');

  //endregion

  //#region Fields

	public parent: Position;
	
	public positionTitle: string = '';
	
	public level: Level = new Level();
	
	public unit: Unit = new Unit();
	
	public positionCategory: PositionCategory = new PositionCategory();
	
	public capacity: number = 0;
	
	public isActive: boolean = false;

  public childCount : number = 0;

	//#endregion

  //#region Collection Properties

  public listOfProposedPosition_PromotionAssessment: PromotionAssessment[] = [];
	
	public listOfCurrentPosition_PromotionAssessment: PromotionAssessment[] = [];
	
	public listOfConfigTargetSetting: ConfigTargetSetting[] = [];
	
	public listOfChildPosition: Position[] = [];
	
	public listOfTargetSetting: TargetSetting[] = [];
	
	public listOfPositionAssignment: PositionAssignment[] = [];
	
	public listOfProposedPosition_RotationAssessment: RotationAssessment[] = [];
	
	public listOfCurrentPosition_RotationAssessment: RotationAssessment[] = [];

  //#endregion

  
  public get SeekInstance(): Position {
    return Position.SeekInstance();
  }

  public static SeekInstance() : Position {
    let position: Position = new Position();
    position.isActive = null;
    position.ResetPaginate();
    return position;
  }

  public static Validate(position: Position) : boolean {
    let result = Validator.Validate(position.parent) &&
					Validator.Validate(position.positionTitle) &&
					Validator.Validate(position.level) &&
					Validator.Validate(position.unit) &&
					Validator.Validate(position.positionCategory);
    if(result === false)
      console.log('Position is unvalid : ', position);
    return result;
  }
}