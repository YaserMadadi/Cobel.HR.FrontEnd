import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { LanguageAbility } from '../languageAbility';
import { LanguageAbilityService } from '../languageAbility.service';
import { LanguageAbilityMasterUI } from '../master/languageAbility.master';
import { LanguageAbilityEditUI } from '../edit/languageAbility.edit';
import { LanguageAbilityDeleteUI } from '../delete/languageAbility.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { Language } from '../../../Base/Language/language';
import { AbilityLevel } from '../../AbilityLevel/abilityLevel';






import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-languageAbility-index',
  templateUrl: './languageAbility.index.html',
  styleUrls: ['./languageAbility.index.css']
})
export class LanguageAbilityIndexUI extends IndexView<LanguageAbility> implements AfterViewInit, IIndexView<LanguageAbility> {

  constructor(private languageAbilityService: LanguageAbilityService) {
    super(languageAbilityService);
    this.filterInstance = LanguageAbility.SeekInstance();
    this.currentInstance = new LanguageAbility();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(languageAbilityEditUI: LanguageAbilityEditUI){
    languageAbilityEditUI.ShowDialog(new LanguageAbility());
  }

  resetFilter() {
    this.filterInstance = LanguageAbility.SeekInstance();
    
    
  }

  public onEditModalClosed(languageAbility: LanguageAbility) {
    this.onRefresh();
    this.currentInstance = new LanguageAbility();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}