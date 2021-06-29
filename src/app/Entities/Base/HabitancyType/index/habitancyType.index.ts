import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { HabitancyType } from '../habitancyType';
import { HabitancyTypeService } from '../habitancyType.service';
import { HabitancyTypeMasterUI } from '../master/habitancyType.master';
import { HabitancyTypeEditUI } from '../edit/habitancyType.edit';
import { HabitancyTypeDeleteUI } from '../delete/habitancyType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { HabitancyEditUI } from '../../../HR/Habitancy/edit/habitancy.edit';
import { Habitancy } from '../../../HR/Habitancy/habitancy';



@Component({
  selector: 'base-habitancyType-index',
  templateUrl: './habitancyType.index.html',
  styleUrls: ['./habitancyType.index.css']
})
export class HabitancyTypeIndexUI extends IndexView<HabitancyType> implements AfterViewInit, IIndexView<HabitancyType> {

  constructor(private habitancyTypeService: HabitancyTypeService) {
    super(habitancyTypeService);
    this.filterInstance = HabitancyType.SeekInstance();
    this.currentInstance = new HabitancyType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Habitancy

  public habitancy_Clicked(habitancyEditUI: HabitancyEditUI) {
    habitancyEditUI.HabitancyType = this.currentInstance;
    habitancyEditUI.ShowDialog(new Habitancy());
  }
                    
  public habitancyEditUI_Closed(habitancy: Habitancy) {
    if (!habitancy)
      return;
    this.onRefresh();
  }
  
  //#endregion Habitancy


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(habitancyTypeEditUI: HabitancyTypeEditUI){
    habitancyTypeEditUI.ShowDialog(new HabitancyType());
  }

  resetFilter() {
    this.filterInstance = HabitancyType.SeekInstance();
    
    
  }

  public onEditModalClosed(habitancyType: HabitancyType) {
    this.onRefresh();
    this.currentInstance = new HabitancyType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}