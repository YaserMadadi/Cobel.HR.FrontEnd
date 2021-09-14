

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Badge } from '../badge';
import { BadgeService } from '../badge.service';
import { BadgeMasterUI } from '../master/badge.master';
import { BadgeEditUI } from '../edit/badge.edit';
import { BadgeDeleteUI } from '../delete/badge.delete';

import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { BadgeType } from '../../BadgeType/badgeType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-badge-index',
  templateUrl: './badge.index.html',
  styleUrls: ['./badge.index.css']
})
export class BadgeIndexUI extends IndexView<Badge> implements AfterViewInit, IIndexView<Badge> {

  constructor(private badgeService: BadgeService) {
    super(badgeService);
    this.filterInstance = Badge.SeekInstance();
    this.currentInstance = new Badge();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(badgeEditUI: BadgeEditUI){
    badgeEditUI.ShowDialog(new Badge());
  }

  resetFilter() {
    this.filterInstance = Badge.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(badge: Badge) {
    this.onRefresh();
    this.currentInstance = new Badge();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
