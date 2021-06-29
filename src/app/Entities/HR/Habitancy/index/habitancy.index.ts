import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Habitancy } from '../habitancy';
import { HabitancyService } from '../habitancy.service';
import { HabitancyMasterUI } from '../master/habitancy.master';
import { HabitancyEditUI } from '../edit/habitancy.edit';
import { HabitancyDeleteUI } from '../delete/habitancy.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { HabitancyType } from '../../../Base/HabitancyType/habitancyType';
import { City } from '../../../Base/City/city';
import { CityEditUI } from '../../../Base/City/edit/city.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-habitancy-index',
  templateUrl: './habitancy.index.html',
  styleUrls: ['./habitancy.index.css']
})
export class HabitancyIndexUI extends IndexView<Habitancy> implements AfterViewInit, IIndexView<Habitancy> {

  constructor(private habitancyService: HabitancyService) {
    super(habitancyService);
    this.filterInstance = Habitancy.SeekInstance();
    this.currentInstance = new Habitancy();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(habitancyEditUI: HabitancyEditUI){
    habitancyEditUI.ShowDialog(new Habitancy());
  }

  resetFilter() {
    this.filterInstance = Habitancy.SeekInstance();
    
    
  }

  public onEditModalClosed(habitancy: Habitancy) {
    this.onRefresh();
    this.currentInstance = new Habitancy();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}