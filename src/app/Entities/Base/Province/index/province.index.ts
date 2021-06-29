import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Province } from '../province';
import { ProvinceService } from '../province.service';
import { ProvinceMasterUI } from '../master/province.master';
import { ProvinceEditUI } from '../edit/province.edit';
import { ProvinceDeleteUI } from '../delete/province.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CityEditUI } from '../../City/edit/city.edit';
import { City } from '../../City/city';



@Component({
  selector: 'base-province-index',
  templateUrl: './province.index.html',
  styleUrls: ['./province.index.css']
})
export class ProvinceIndexUI extends IndexView<Province> implements AfterViewInit, IIndexView<Province> {

  constructor(private provinceService: ProvinceService) {
    super(provinceService);
    this.filterInstance = Province.SeekInstance();
    this.currentInstance = new Province();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region City

  public city_Clicked(cityEditUI: CityEditUI) {
    cityEditUI.Province = this.currentInstance;
    cityEditUI.ShowDialog(new City());
  }
                    
  public cityEditUI_Closed(city: City) {
    if (!city)
      return;
    this.onRefresh();
  }
  
  //#endregion City


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(provinceEditUI: ProvinceEditUI){
    provinceEditUI.ShowDialog(new Province());
  }

  resetFilter() {
    this.filterInstance = Province.SeekInstance();
    
    
  }

  public onEditModalClosed(province: Province) {
    this.onRefresh();
    this.currentInstance = new Province();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}