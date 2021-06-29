import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Position } from '../Position/position';


@Directive()
export class Level extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Level.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Level', 'Level');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfPosition: Position[] = [];

  //#endregion

  
  public get SeekInstance(): Level {
    return Level.SeekInstance();
  }

  public static SeekInstance() : Level {
    let level: Level = new Level();
    level.isActive = null;
    level.ResetPaginate();
    return level;
  }

  public static Validate(level: Level) : boolean {
    let result = Validator.Validate(level.title);
    if(result === false)
      console.log('Level is unvalid : ', level);
    return result;
  }
}