import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DrivingLicenseType } from '../drivingLicenseType';
import { DrivingLicenseTypeService } from '../drivingLicenseType.service';


@Component({
  selector: 'base-drivingLicenseType-delete',
  templateUrl: './drivingLicenseType.delete.html',
  styleUrls: ['./drivingLicenseType.delete.css'],
  providers: [DrivingLicenseTypeService]
})
export class DrivingLicenseTypeDeleteUI extends DeleteModal<DrivingLicenseType> {

    constructor(private drivingLicenseTypeService: DrivingLicenseTypeService){
        super(drivingLicenseTypeService);
    }

}