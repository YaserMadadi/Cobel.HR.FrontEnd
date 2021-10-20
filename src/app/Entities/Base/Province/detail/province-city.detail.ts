import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Province } from '../province';
import { ProvinceService } from '../province.service';

import { City } from '../../City/city';
import { CityMasterUI } from '../../City/master/city.master';
import { CityEditUI } from '../../City/edit/city.edit';
import { CityDeleteUI } from '../../City/delete/city.delete';



@Component({
  selector: 'province-city-detail',
  templateUrl: './province-city.detail.html',
  styleUrls: ['./province-city.detail.css']
})
export class Province_City_DetailUI extends DetailView<Province> {

  constructor(private provinceService: ProvinceService) {
    super(provinceService);
  }

  public CityList : City[] = [];
  
  public currentCity : City = new City();

  private province: Province = new Province();

  @Input()
  public set Province(value: Province) {
    this.province = value;
    this.onReload();
  }

  public get Province(): Province { return this.province }

  public onReload(){
    if (Province.NotConfirm(this.province))
      return;
    this.provinceService
      .ServiceCollection
      .CollectionOfCity(this.province)
      .then(cityList => {
        this.CityList = cityList;
        this.currentCity = new City();
      });
  }

  public onSelect(i: number) {
    this.currentCity = this.CityList[i];
    if (City.NotConfirm(this.currentCity))
      this.currentCity = new City();
  }

  public onDblClicked(masterUI: CityMasterUI) {
    if (City.NotConfirm(this.currentCity))
      return;
    masterUI.ShowDialog(this.currentCity);
  }

  public onAdd(editUI: CityEditUI) {
    editUI.Province = this.province;
    editUI.ShowDialog(new City());
  }

  public onEdit(editUI: CityEditUI) {
    if (City.NotConfirm(this.currentCity))
      return;
    editUI.ShowDialog(this.currentCity);
  }

  public onDelete(deleteUI: CityDeleteUI) {
    if (City.NotConfirm(this.currentCity))
      return;
    deleteUI.ShowDialog(this.currentCity);
  }

  public onEditModal_Closed(city: City) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}