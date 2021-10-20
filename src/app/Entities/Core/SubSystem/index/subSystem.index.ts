

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { SubSystem } from '../subSystem';
import { SubSystemService } from '../subSystem.service';
import { SubSystemMasterUI } from '../master/subSystem.master';
import { SubSystemEditUI } from '../edit/subSystem.edit';
import { SubSystemDeleteUI } from '../delete/subSystem.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MenuEditUI } from '../../Menu/edit/menu.edit';
import { Menu } from '../../Menu/menu';



@Component({
  selector: 'core-subSystem-index',
  templateUrl: './subSystem.index.html',
  styleUrls: ['./subSystem.index.css']
})
export class SubSystemIndexUI extends IndexView<SubSystem> implements AfterViewInit, IIndexView<SubSystem> {

  constructor(private subSystemService: SubSystemService) {
    super(subSystemService);
    this.filterInstance = SubSystem.SeekInstance();
    this.currentInstance = new SubSystem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Menu

  public menu_Clicked(menuEditUI: MenuEditUI) {
    menuEditUI.SubSystem = this.currentInstance;
    menuEditUI.ShowDialog(new Menu());
  }
                    
  public menuEditUI_Closed(menu: Menu) {
    if (!menu)
      return;
    this.onRefresh();
  }
  
  //#endregion Menu


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(subSystemEditUI: SubSystemEditUI){
    subSystemEditUI.ShowDialog(new SubSystem());
  }

  resetFilter() {
    this.filterInstance = SubSystem.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(subSystem: SubSystem) {
    this.onRefresh();
    this.currentInstance = new SubSystem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
