import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PersonDrivingLicense } from '../personDrivingLicense';
import { PersonDrivingLicenseService } from '../personDrivingLicense.service';
import { PersonDrivingLicenseMasterUI } from '../master/personDrivingLicense.master';
import { PersonDrivingLicenseEditUI } from '../edit/personDrivingLicense.edit';
import { PersonDrivingLicenseDeleteUI } from '../delete/personDrivingLicense.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { DrivingLicenseType } from '../../../Base/DrivingLicenseType/drivingLicenseType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-personDrivingLicense-index',
  templateUrl: './personDrivingLicense.index.html',
  styleUrls: ['./personDrivingLicense.index.css']
})
export class PersonDrivingLicenseIndexUI extends IndexView<PersonDrivingLicense> implements AfterViewInit, IIndexView<PersonDrivingLicense> {

  constructor(private personDrivingLicenseService: PersonDrivingLicenseService) {
    super(personDrivingLicenseService);
    this.filterInstance = PersonDrivingLicense.SeekInstance();
    this.currentInstance = new PersonDrivingLicense();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(personDrivingLicenseEditUI: PersonDrivingLicenseEditUI){
    personDrivingLicenseEditUI.ShowDialog(new PersonDrivingLicense());
  }

  resetFilter() {
    this.filterInstance = PersonDrivingLicense.SeekInstance();
    
    
  }

  public onEditModalClosed(personDrivingLicense: PersonDrivingLicense) {
    this.onRefresh();
    this.currentInstance = new PersonDrivingLicense();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}