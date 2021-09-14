import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { DrivingLicenseType } from '../drivingLicenseType';
import { DrivingLicenseTypeService } from '../drivingLicenseType.service';

import { PersonDrivingLicense } from '../../../HR/PersonDrivingLicense/personDrivingLicense';
import { PersonDrivingLicenseMasterUI } from '../../../HR/PersonDrivingLicense/master/personDrivingLicense.master';
import { PersonDrivingLicenseEditUI } from '../../../HR/PersonDrivingLicense/edit/personDrivingLicense.edit';
import { PersonDrivingLicenseDeleteUI } from '../../../HR/PersonDrivingLicense/delete/personDrivingLicense.delete';



@Component({
  selector: 'drivingLicenseType-personDrivingLicense-detail',
  templateUrl: './drivingLicenseType-personDrivingLicense.detail.html',
  styleUrls: ['./drivingLicenseType-personDrivingLicense.detail.css']
})
export class DrivingLicenseType_PersonDrivingLicense_DetailUI extends DetailView<DrivingLicenseType> {

  constructor(private drivingLicenseTypeService: DrivingLicenseTypeService) {
    super(drivingLicenseTypeService);
  }

  public PersonDrivingLicenseList : PersonDrivingLicense[] = [];
  
  public currentPersonDrivingLicense : PersonDrivingLicense = new PersonDrivingLicense();

  private drivingLicenseType: DrivingLicenseType = new DrivingLicenseType();

  @Input()
  public set DrivingLicenseType(value: DrivingLicenseType) {
    this.drivingLicenseType = value;
    this.onReload();
  }

  public get DrivingLicenseType(): DrivingLicenseType { return this.drivingLicenseType }

  public onReload(){
    if (DrivingLicenseType.NotConfirm(this.drivingLicenseType))
      return;
    this.drivingLicenseTypeService
      .ServiceCollection
      .CollectionOfPersonDrivingLicense(this.drivingLicenseType)
      .then(personDrivingLicenseList => {
        this.PersonDrivingLicenseList = personDrivingLicenseList;
        this.currentPersonDrivingLicense = new PersonDrivingLicense();
      });
  }

  public onSelect(i: number) {
    this.currentPersonDrivingLicense = this.PersonDrivingLicenseList[i];
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      this.currentPersonDrivingLicense = new PersonDrivingLicense();
  }

  public onDblClicked(masterUI: PersonDrivingLicenseMasterUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    masterUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onAdd(editUI: PersonDrivingLicenseEditUI) {
    editUI.DrivingLicenseType = this.drivingLicenseType;
    editUI.ShowDialog(new PersonDrivingLicense());
  }

  public onEdit(editUI: PersonDrivingLicenseEditUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    editUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onDelete(deleteUI: PersonDrivingLicenseDeleteUI) {
    if (PersonDrivingLicense.NotConfirm(this.currentPersonDrivingLicense))
      return;
    deleteUI.ShowDialog(this.currentPersonDrivingLicense);
  }

  public onEditModal_Closed(personDrivingLicense: PersonDrivingLicense) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}