import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { City } from '../city';
import { CityService } from '../city.service';

import { Habitancy } from '../../../HR/Habitancy/habitancy';
import { HabitancyMasterUI } from '../../../HR/Habitancy/master/habitancy.master';
import { HabitancyEditUI } from '../../../HR/Habitancy/edit/habitancy.edit';
import { HabitancyDeleteUI } from '../../../HR/Habitancy/delete/habitancy.delete';



@Component({
  selector: 'city-habitancy-detail',
  templateUrl: './city-habitancy.detail.html',
  styleUrls: ['./city-habitancy.detail.css'],
}) 

@Injectable()
export class City_Habitancy_DetailUI extends DetailView<City> {

  constructor(private cityService: CityService) {
    super(cityService);
  }

  public HabitancyList : Habitancy[] = [];
  
  public currentHabitancy : Habitancy = new Habitancy();

  private city: City = new City();

  @Input()
  public set City(value: City) {
    this.city = value;
    this.onReload();
  }

  public get City(): City { return this.city }

  public onReload(){
    if (City.NotConfirm(this.city))
      return;
    this.cityService
      .ServiceCollection
      .CollectionOfHabitancy(this.city)
      .then(habitancyList => {
        this.HabitancyList = habitancyList;
        this.currentHabitancy = new Habitancy();
      });
  }

  public onSelect(i: number) {
    this.currentHabitancy = this.HabitancyList[i];
    if (Habitancy.NotConfirm(this.currentHabitancy))
      this.currentHabitancy = new Habitancy();
  }

  public onDblClicked(masterUI: HabitancyMasterUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    masterUI.ShowDialog(this.currentHabitancy);
  }

  public onAdd(editUI: HabitancyEditUI) {
    editUI.City = this.city;
    editUI.ShowDialog(new Habitancy());
  }

  public onEdit(editUI: HabitancyEditUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    editUI.ShowDialog(this.currentHabitancy);
  }

  public onDelete(deleteUI: HabitancyDeleteUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    deleteUI.ShowDialog(this.currentHabitancy);
  }

  public onEditModal_Closed(habitancy: Habitancy) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}