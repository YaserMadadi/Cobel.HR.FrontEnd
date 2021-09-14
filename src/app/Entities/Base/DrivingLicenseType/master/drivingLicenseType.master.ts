import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DrivingLicenseType } from '../drivingLicenseType';
import { DrivingLicenseTypeService } from '../drivingLicenseType.service';
import { DrivingLicenseTypeDeleteUI } from '../delete/drivingLicenseType.delete';
import { DrivingLicenseTypeEditUI } from '../edit/drivingLicenseType.edit';
import { PersonDrivingLicenseService } from '../../../HR/PersonDrivingLicense/personDrivingLicense.service';



@Component({
  selector: 'base-drivingLicenseType-master',
  templateUrl: './drivingLicenseType.master.html',
  styleUrls: ['./drivingLicenseType.master.css'],
  
})
export class DrivingLicenseTypeMasterUI extends MasterModal<DrivingLicenseType> {

  constructor(private drivingLicenseTypeService: DrivingLicenseTypeService) {
    super(drivingLicenseTypeService);
  }
}