import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Language } from '../language';
import { LanguageService } from '../language.service';
import { LanguageMasterUI } from '../master/language.master';
import { LanguageEditUI } from '../edit/language.edit';
import { LanguageDeleteUI } from '../delete/language.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { LanguageAbilityEditUI } from '../../../HR/LanguageAbility/edit/languageAbility.edit';
import { LanguageAbility } from '../../../HR/LanguageAbility/languageAbility';



@Component({
  selector: 'base-language-index',
  templateUrl: './language.index.html',
  styleUrls: ['./language.index.css']
})
export class LanguageIndexUI extends IndexView<Language> implements AfterViewInit, IIndexView<Language> {

  constructor(private languageService: LanguageService) {
    super(languageService);
    this.filterInstance = Language.SeekInstance();
    this.currentInstance = new Language();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region LanguageAbility

  public languageAbility_Clicked(languageAbilityEditUI: LanguageAbilityEditUI) {
    languageAbilityEditUI.Language = this.currentInstance;
    languageAbilityEditUI.ShowDialog(new LanguageAbility());
  }
                    
  public languageAbilityEditUI_Closed(languageAbility: LanguageAbility) {
    if (!languageAbility)
      return;
    this.onRefresh();
  }
  
  //#endregion LanguageAbility


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(languageEditUI: LanguageEditUI){
    languageEditUI.ShowDialog(new Language());
  }

  resetFilter() {
    this.filterInstance = Language.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(language: Language) {
    this.onRefresh();
    this.currentInstance = new Language();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}