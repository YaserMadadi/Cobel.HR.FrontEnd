import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AbilityLevel } from '../abilityLevel';
import { AbilityLevelService } from '../abilityLevel.service';

import { LanguageAbility } from '../../LanguageAbility/languageAbility';
import { LanguageAbilityMasterUI } from '../../LanguageAbility/master/languageAbility.master';
import { LanguageAbilityEditUI } from '../../LanguageAbility/edit/languageAbility.edit';
import { LanguageAbilityDeleteUI } from '../../LanguageAbility/delete/languageAbility.delete';



@Component({
  selector: 'writingLevel-languageAbility-detail',
  templateUrl: './writingLevel-languageAbility.detail.html',
  styleUrls: ['./writingLevel-languageAbility.detail.css']
})
export class WritingLevel_LanguageAbility_DetailUI extends DetailView<AbilityLevel> {

  constructor(private abilityLevelService: AbilityLevelService) {
    super(abilityLevelService);
  }

  public LanguageAbilityList : LanguageAbility[] = [];
  
  public currentLanguageAbility : LanguageAbility = new LanguageAbility();

  private writingLevel: AbilityLevel = new AbilityLevel();

  @Input()
  public set WritingLevel(value: AbilityLevel) {
    this.writingLevel = value;
    this.onReload();
  }

  public get WritingLevel(): AbilityLevel { return this.writingLevel }

  public onReload(){
    if (AbilityLevel.NotConfirm(this.writingLevel))
      return;
    this.abilityLevelService
      .ServiceCollection
      .CollectionOfLanguageAbility_WritingLevel(this.writingLevel)
      .then(languageAbilityList => {
        this.LanguageAbilityList = languageAbilityList;
        this.currentLanguageAbility = new LanguageAbility();
      });
  }

  public onSelect(i: number) {
    this.currentLanguageAbility = this.LanguageAbilityList[i];
    if (LanguageAbility.NotConfirm(this.currentLanguageAbility))
      this.currentLanguageAbility = new LanguageAbility();
  }

  public onDblClicked(masterUI: LanguageAbilityMasterUI) {
    if (LanguageAbility.NotConfirm(this.currentLanguageAbility))
      return;
    masterUI.ShowDialog(this.currentLanguageAbility);
  }

  public onAdd(editUI: LanguageAbilityEditUI) {
    editUI.WritingLevel = this.writingLevel;
    editUI.ShowDialog(new LanguageAbility());
  }

  public onEdit(editUI: LanguageAbilityEditUI) {
    if (LanguageAbility.NotConfirm(this.currentLanguageAbility))
      return;
    editUI.ShowDialog(this.currentLanguageAbility);
  }

  public onDelete(deleteUI: LanguageAbilityDeleteUI) {
    if (LanguageAbility.NotConfirm(this.currentLanguageAbility))
      return;
    deleteUI.ShowDialog(this.currentLanguageAbility);
  }

  public onEditModal_Closed(languageAbility: LanguageAbility) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}