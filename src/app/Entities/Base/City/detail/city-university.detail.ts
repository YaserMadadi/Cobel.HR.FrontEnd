import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { City } from '../city';
import { CityService } from '../city.service';

import { University } from '../../University/university';
import { UniversityMasterUI } from '../../University/master/university.master';
import { UniversityEditUI } from '../../University/edit/university.edit';
import { UniversityDeleteUI } from '../../University/delete/university.delete';



@Component({
  selector: 'city-university-detail',
  templateUrl: './city-university.detail.html',
  styleUrls: ['./city-university.detail.css'],
  providers: [CityService]
}) 

@Injectable()
export class City_University_DetailUI extends DetailView<City> {

  constructor(private cityService: CityService) {
    super(cityService);
  }

  public UniversityList : University[] = [];
  
  public currentUniversity : University = new University();

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
      .CollectionOfUniversity(this.city)
      .then(universityList => {
        this.UniversityList = universityList;
        this.currentUniversity = new University();
      });
  }

  public onSelect(i: number) {
    this.currentUniversity = this.UniversityList[i];
    if (University.NotConfirm(this.currentUniversity))
      this.currentUniversity = new University();
  }

  public onDblClicked(masterUI: UniversityMasterUI) {
    if (University.NotConfirm(this.currentUniversity))
      return;
    masterUI.ShowDialog(this.currentUniversity);
  }

  public onAdd(editUI: UniversityEditUI) {
    editUI.City = this.city;
    editUI.ShowDialog(new University());
  }

  public onEdit(editUI: UniversityEditUI) {
    if (University.NotConfirm(this.currentUniversity))
      return;
    editUI.ShowDialog(this.currentUniversity);
  }

  public onDelete(deleteUI: UniversityDeleteUI) {
    if (University.NotConfirm(this.currentUniversity))
      return;
    deleteUI.ShowDialog(this.currentUniversity);
  }

  public onEditModal_Closed(university: University) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}