import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { Person } from '../Person/person';
import { Language } from '../../Base/Language/language';
import { AbilityLevel } from '../AbilityLevel/abilityLevel';


@Directive()
export class LanguageAbility extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = LanguageAbility.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'LanguageAbility', 'Language Ability');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public language: Language = new Language();
	
	public writingLevel: AbilityLevel = new AbilityLevel();
	
	public readingLevel: AbilityLevel = new AbilityLevel();
	
	public speackingLevel: AbilityLevel = new AbilityLevel();
	
	public listeningLevel: AbilityLevel = new AbilityLevel();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  // No Item...

  //#endregion

  
  public get SeekInstance(): LanguageAbility {
    return LanguageAbility.SeekInstance();
  }

  public static SeekInstance() : LanguageAbility {
    let languageAbility: LanguageAbility = new LanguageAbility();
    // No Item...
    languageAbility.ResetPaginate();
    return languageAbility;
  }

  public static Validate(languageAbility: LanguageAbility) : boolean {
    let result = Validator.Validate(languageAbility.person) &&
					Validator.Validate(languageAbility.language) &&
					Validator.Validate(languageAbility.writingLevel) &&
					Validator.Validate(languageAbility.readingLevel) &&
					Validator.Validate(languageAbility.speackingLevel) &&
					Validator.Validate(languageAbility.listeningLevel);
    if(result === false)
      console.log('LanguageAbility is unvalid : ', languageAbility);
    return result;
  }
}