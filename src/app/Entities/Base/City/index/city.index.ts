import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { City } from '../city';
import { CityService } from '../city.service';
import { CityMasterUI } from '../master/city.master';
import { CityEditUI } from '../edit/city.edit';
import { CityDeleteUI } from '../delete/city.delete';

import { Province } from '../../Province/province';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { HabitancyEditUI } from '../../../HR/Habitancy/edit/habitancy.edit';
import { Habitancy } from '../../../HR/Habitancy/habitancy';
import { UniversityEditUI } from '../../University/edit/university.edit';
import { University } from '../../University/university';



@Component({
  selector: 'base-city-index',
  templateUrl: './city.index.html',
  styleUrls: ['./city.index.css']
})
export class CityIndexUI extends IndexView<City> implements AfterViewInit, IIndexView<City> {

  constructor(private cityService: CityService) {
    super(cityService);
    this.filterInstance = City.SeekInstance();
    this.currentInstance = new City();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  //#region Habitancy

  public habitancy_Clicked(habitancyEditUI: HabitancyEditUI) {
    habitancyEditUI.City = this.currentInstance;
    habitancyEditUI.ShowDialog(new Habitancy());
  }
                    
  public habitancyEditUI_Closed(habitancy: Habitancy) {
    if (!habitancy)
      return;
    this.onRefresh();
  }
  
  //#endregion Habitancy

  //#region University

  public university_Clicked(universityEditUI: UniversityEditUI) {
    universityEditUI.City = this.currentInstance;
    universityEditUI.ShowDialog(new University());
  }
                    
  public universityEditUI_Closed(university: University) {
    if (!university)
      return;
    this.onRefresh();
  }
  
  //#endregion University


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(cityEditUI: CityEditUI){
    cityEditUI.ShowDialog(new City());
  }

  resetFilter() {
    this.filterInstance = City.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(city: City) {
    this.onRefresh();
    this.currentInstance = new City();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}