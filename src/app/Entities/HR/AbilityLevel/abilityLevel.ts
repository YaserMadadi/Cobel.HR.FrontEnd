import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { LanguageAbility } from '../LanguageAbility/languageAbility';


@Directive()
export class AbilityLevel extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AbilityLevel.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'AbilityLevel', 'Ability Level');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfListeningLevel_LanguageAbility: LanguageAbility[] = [];
	
	public listOfSpeackingLevel_LanguageAbility: LanguageAbility[] = [];
	
	public listOfReadingLevel_LanguageAbility: LanguageAbility[] = [];
	
	public listOfWritingLevel_LanguageAbility: LanguageAbility[] = [];

  //#endregion

  
  public get SeekInstance(): AbilityLevel {
    return AbilityLevel.SeekInstance();
  }

  public static SeekInstance() : AbilityLevel {
    let abilityLevel: AbilityLevel = new AbilityLevel();
    abilityLevel.isActive = null;
    abilityLevel.ResetPaginate();
    return abilityLevel;
  }

  public static Validate(abilityLevel: AbilityLevel) : boolean {
    let result = Validator.Validate(abilityLevel.title);
    if(result === false)
      console.log('AbilityLevel is unvalid : ', abilityLevel);
    return result;
  }
}