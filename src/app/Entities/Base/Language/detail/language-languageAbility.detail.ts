import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Language } from '../language';
import { LanguageService } from '../language.service';

import { LanguageAbility } from '../../../HR/LanguageAbility/languageAbility';
import { LanguageAbilityMasterUI } from '../../../HR/LanguageAbility/master/languageAbility.master';
import { LanguageAbilityEditUI } from '../../../HR/LanguageAbility/edit/languageAbility.edit';
import { LanguageAbilityDeleteUI } from '../../../HR/LanguageAbility/delete/languageAbility.delete';



@Component({
  selector: 'language-languageAbility-detail',
  templateUrl: './language-languageAbility.detail.html',
  styleUrls: ['./language-languageAbility.detail.css']
})
export class Language_LanguageAbility_DetailUI extends DetailView<Language> {

  constructor(private languageService: LanguageService) {
    super(languageService);
  }

  public LanguageAbilityList : LanguageAbility[] = [];
  
  public currentLanguageAbility : LanguageAbility = new LanguageAbility();

  private language: Language = new Language();

  @Input()
  public set Language(value: Language) {
    this.language = value;
    this.onReload();
  }

  public get Language(): Language { return this.language }

  public onReload(){
    if (Language.NotConfirm(this.language))
      return;
    this.languageService
      .ServiceCollection
      .CollectionOfLanguageAbility(this.language)
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
    editUI.Language = this.language;
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