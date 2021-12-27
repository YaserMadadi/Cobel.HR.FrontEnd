import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { TargetSettingMode } from '../targetSettingMode';
import { TargetSettingModeService } from '../targetSettingMode.service';
import { TargetSettingModeDeleteUI } from '../delete/targetSettingMode.delete';
import { TargetSettingModeEditUI } from '../edit/targetSettingMode.edit';
import { TargetSettingService } from '../../../PMS/TargetSetting/targetSetting.service';



@Component({
  selector: 'base-pms-targetSettingMode-master',
  templateUrl: './targetSettingMode.master.html',
  styleUrls: ['./targetSettingMode.master.css'],
  
})
export class TargetSettingModeMasterUI extends MasterModal<TargetSettingMode> {

  constructor(private targetSettingModeService: TargetSettingModeService) {
    super(targetSettingModeService);
  }
}
