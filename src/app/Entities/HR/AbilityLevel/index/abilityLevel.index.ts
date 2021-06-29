import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AbilityLevel } from '../abilityLevel';
import { AbilityLevelService } from '../abilityLevel.service';
import { AbilityLevelMasterUI } from '../master/abilityLevel.master';
import { AbilityLevelEditUI } from '../edit/abilityLevel.edit';
import { AbilityLevelDeleteUI } from '../delete/abilityLevel.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-abilityLevel-index',
  templateUrl: './abilityLevel.index.html',
  styleUrls: ['./abilityLevel.index.css']
})
export class AbilityLevelIndexUI extends IndexView<AbilityLevel> implements AfterViewInit, IIndexView<AbilityLevel> {

  constructor(private abilityLevelService: AbilityLevelService) {
    super(abilityLevelService);
    this.filterInstance = AbilityLevel.SeekInstance();
    this.currentInstance = new AbilityLevel();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  





  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(abilityLevelEditUI: AbilityLevelEditUI){
    abilityLevelEditUI.ShowDialog(new AbilityLevel());
  }

  resetFilter() {
    this.filterInstance = AbilityLevel.SeekInstance();
    
    
  }

  public onEditModalClosed(abilityLevel: AbilityLevel) {
    this.onRefresh();
    this.currentInstance = new AbilityLevel();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}