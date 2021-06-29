import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DrivingLicenseType } from '../drivingLicenseType';
import { DrivingLicenseTypeService } from '../drivingLicenseType.service';
import { DrivingLicenseTypeMasterUI } from '../master/drivingLicenseType.master';
import { DrivingLicenseTypeEditUI } from '../edit/drivingLicenseType.edit';
import { DrivingLicenseTypeDeleteUI } from '../delete/drivingLicenseType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonDrivingLicenseEditUI } from '../../../HR/PersonDrivingLicense/edit/personDrivingLicense.edit';
import { PersonDrivingLicense } from '../../../HR/PersonDrivingLicense/personDrivingLicense';



@Component({
  selector: 'base-drivingLicenseType-index',
  templateUrl: './drivingLicenseType.index.html',
  styleUrls: ['./drivingLicenseType.index.css']
})
export class DrivingLicenseTypeIndexUI extends IndexView<DrivingLicenseType> implements AfterViewInit, IIndexView<DrivingLicenseType> {

  constructor(private drivingLicenseTypeService: DrivingLicenseTypeService) {
    super(drivingLicenseTypeService);
    this.filterInstance = DrivingLicenseType.SeekInstance();
    this.currentInstance = new DrivingLicenseType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PersonDrivingLicense

  public personDrivingLicense_Clicked(personDrivingLicenseEditUI: PersonDrivingLicenseEditUI) {
    personDrivingLicenseEditUI.DrivingLicenseType = this.currentInstance;
    personDrivingLicenseEditUI.ShowDialog(new PersonDrivingLicense());
  }
                    
  public personDrivingLicenseEditUI_Closed(personDrivingLicense: PersonDrivingLicense) {
    if (!personDrivingLicense)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonDrivingLicense


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(drivingLicenseTypeEditUI: DrivingLicenseTypeEditUI){
    drivingLicenseTypeEditUI.ShowDialog(new DrivingLicenseType());
  }

  resetFilter() {
    this.filterInstance = DrivingLicenseType.SeekInstance();
    
    
  }

  public onEditModalClosed(drivingLicenseType: DrivingLicenseType) {
    this.onRefresh();
    this.currentInstance = new DrivingLicenseType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}