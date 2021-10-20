import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { LanguageAbility } from '../languageAbility';
import { LanguageAbilityService } from '../languageAbility.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { Language } from '../../../Base/Language/language';
import { LanguageEditUI } from '../../../Base/Language/edit/language.edit';
import { AbilityLevel } from '../../AbilityLevel/abilityLevel';
import { AbilityLevelEditUI } from '../../AbilityLevel/edit/abilityLevel.edit';



@Component({
  selector: 'hr-languageAbility-edit',
  templateUrl: './languageAbility.edit.html',
  styleUrls: ['./languageAbility.edit.css']
})
export class LanguageAbilityEditUI extends EditModal<LanguageAbility> implements IEditModal<LanguageAbility>  {
  
  constructor(private languageAbilityService: LanguageAbilityService) {
    super(languageAbilityService); 
    this.currentInstance = new LanguageAbility();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.languageAbilityService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- Language --

  languageComponent : ForeignComponent<Language> = new ForeignComponent<Language>(this.languageAbilityService.LanguageService);

  @Input()
  public set Language(value: Language) {
    this.currentInstance.language = this.languageComponent.instance = value;
  }  


  //#endregion -- Language --
	//#region -- WritingLevel --

  writingLevelComponent : ForeignComponent<AbilityLevel> = new ForeignComponent<AbilityLevel>(this.languageAbilityService.AbilityLevelService);

  @Input()
  public set WritingLevel(value: AbilityLevel) {
    this.currentInstance.writingLevel = this.writingLevelComponent.instance = value;
  }  


  //#endregion -- WritingLevel --
	//#region -- ReadingLevel --

  readingLevelComponent : ForeignComponent<AbilityLevel> = new ForeignComponent<AbilityLevel>(this.languageAbilityService.AbilityLevelService);

  @Input()
  public set ReadingLevel(value: AbilityLevel) {
    this.currentInstance.readingLevel = this.readingLevelComponent.instance = value;
  }  


  //#endregion -- ReadingLevel --
	//#region -- SpeackingLevel --

  speackingLevelComponent : ForeignComponent<AbilityLevel> = new ForeignComponent<AbilityLevel>(this.languageAbilityService.AbilityLevelService);

  @Input()
  public set SpeackingLevel(value: AbilityLevel) {
    this.currentInstance.speackingLevel = this.speackingLevelComponent.instance = value;
  }  


  //#endregion -- SpeackingLevel --
	//#region -- ListeningLevel --

  listeningLevelComponent : ForeignComponent<AbilityLevel> = new ForeignComponent<AbilityLevel>(this.languageAbilityService.AbilityLevelService);

  @Input()
  public set ListeningLevel(value: AbilityLevel) {
    this.currentInstance.listeningLevel = this.listeningLevelComponent.instance = value;
  }  


  //#endregion -- ListeningLevel --
	//#endregion

  @ViewChild('languageAbilityEditUI')
  private languageAbilityEditUI: NgForm;

  Init(languageAbility: LanguageAbility = new LanguageAbility()) {
    if (languageAbility.isNew)
      this.languageAbilityEditUI.reset();
    this.InitLanguageAbility(languageAbility);
    this.loadLists();
  }

  private loadLists() {
    
    this.languageComponent.LoadList();
		this.writingLevelComponent.LoadList();
		this.readingLevelComponent.LoadList();
		this.speackingLevelComponent.LoadList();
		this.listeningLevelComponent.LoadList();
  }
  
  InitLanguageAbility(languageAbility: LanguageAbility){
    this.currentInstance = this.service.CreateInstance();
    if (!languageAbility.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = languageAbility.person;
			this.languageComponent.instance = languageAbility.language;
			this.writingLevelComponent.instance = languageAbility.writingLevel;
			this.readingLevelComponent.instance = languageAbility.readingLevel;
			this.speackingLevelComponent.instance = languageAbility.speackingLevel;
			this.listeningLevelComponent.instance = languageAbility.listeningLevel;
    } else {
      languageAbility.person = this.personComponent.instance;
			languageAbility.language = this.languageComponent.instance;
			languageAbility.writingLevel = this.writingLevelComponent.instance;
			languageAbility.readingLevel = this.readingLevelComponent.instance;
			languageAbility.speackingLevel = this.speackingLevelComponent.instance;
			languageAbility.listeningLevel = this.listeningLevelComponent.instance;
    }
    this.currentInstance = languageAbility;
  }

  ResetForm() {
    this.Person = new Person();
		this.Language = new Language();
		this.WritingLevel = new AbilityLevel();
		this.ReadingLevel = new AbilityLevel();
		this.SpeackingLevel = new AbilityLevel();
		this.ListeningLevel = new AbilityLevel();
  }
}