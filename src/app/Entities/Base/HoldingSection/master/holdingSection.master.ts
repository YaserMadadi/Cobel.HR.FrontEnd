import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';
import { HoldingSectionDeleteUI } from '../delete/holdingSection.delete';
import { HoldingSectionEditUI } from '../edit/holdingSection.edit';
import { EmployeeDetailService } from '../../../HR/EmployeeDetail/employeeDetail.service';
import { EmployeeService } from '../../../HR/Employee/employee.service';



@Component({
  selector: 'base-holdingSection-master',
  templateUrl: './holdingSection.master.html',
  styleUrls: ['./holdingSection.master.css'],
  providers: [
    HoldingSectionService,
    EmployeeDetailService,
		EmployeeService,
  ]
})
export class HoldingSectionMasterUI extends MasterModal<HoldingSection> {

  constructor(private holdingSectionService: HoldingSectionService) {
    super(holdingSectionService);
  }
}