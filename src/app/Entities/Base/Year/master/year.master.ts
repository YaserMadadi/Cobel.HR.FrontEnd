import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Year } from '../year';
import { YearService } from '../year.service';
import { YearDeleteUI } from '../delete/year.delete';
import { YearEditUI } from '../edit/year.edit';
import { TargetSettingService } from '../../../PMS/TargetSetting/targetSetting.service';
import { YearQuarterService } from '../../YearQuarter/yearQuarter.service';



@Component({
  selector: 'base-year-master',
  templateUrl: './year.master.html',
  styleUrls: ['./year.master.css']
})
export class YearMasterUI extends MasterModal<Year> {

  constructor(private yearService: YearService) {
    super(yearService);
  }
}