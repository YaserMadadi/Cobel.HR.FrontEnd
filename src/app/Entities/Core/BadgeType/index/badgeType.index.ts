

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { BadgeType } from '../badgeType';
import { BadgeTypeService } from '../badgeType.service';
import { BadgeTypeMasterUI } from '../master/badgeType.master';
import { BadgeTypeEditUI } from '../edit/badgeType.edit';
import { BadgeTypeDeleteUI } from '../delete/badgeType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BadgeEditUI } from '../../Badge/edit/badge.edit';
import { Badge } from '../../Badge/badge';



@Component({
  selector: 'core-badgeType-index',
  templateUrl: './badgeType.index.html',
  styleUrls: ['./badgeType.index.css']
})
export class BadgeTypeIndexUI extends IndexView<BadgeType> implements AfterViewInit, IIndexView<BadgeType> {

  constructor(private badgeTypeService: BadgeTypeService) {
    super(badgeTypeService);
    this.filterInstance = BadgeType.SeekInstance();
    this.currentInstance = new BadgeType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Badge

  public badge_Clicked(badgeEditUI: BadgeEditUI) {
    badgeEditUI.BadgeType = this.currentInstance;
    badgeEditUI.ShowDialog(new Badge());
  }
                    
  public badgeEditUI_Closed(badge: Badge) {
    if (!badge)
      return;
    this.onRefresh();
  }
  
  //#endregion Badge


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(badgeTypeEditUI: BadgeTypeEditUI){
    badgeTypeEditUI.ShowDialog(new BadgeType());
  }

  resetFilter() {
    this.filterInstance = BadgeType.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(badgeType: BadgeType) {
    this.onRefresh();
    this.currentInstance = new BadgeType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
