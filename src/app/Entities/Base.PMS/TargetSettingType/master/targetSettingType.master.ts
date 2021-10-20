import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { TargetSettingType } from '../targetSettingType';
import { TargetSettingTypeService } from '../targetSettingType.service';
import { TargetSettingTypeDeleteUI } from '../delete/targetSettingType.delete';
import { TargetSettingTypeEditUI } from '../edit/targetSettingType.edit';
import { TargetSettingService } from '../../../PMS/TargetSetting/targetSetting.service';



@Component({
  selector: 'base-pms-targetSettingType-master',
  templateUrl: './targetSettingType.master.html',
  styleUrls: ['./targetSettingType.master.css'],
  
})
export class TargetSettingTypeMasterUI extends MasterModal<TargetSettingType> {

  constructor(private targetSettingTypeService: TargetSettingTypeService) {
    super(targetSettingTypeService);
  }
}
