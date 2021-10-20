import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';
import { ConfigTargetSettingDeleteUI } from '../delete/configTargetSetting.delete';
import { ConfigTargetSettingEditUI } from '../edit/configTargetSetting.edit';
import { ConfigQualitativeObjectiveService } from '../../ConfigQualitativeObjective/configQualitativeObjective.service';



@Component({
  selector: 'pms-configTargetSetting-master',
  templateUrl: './configTargetSetting.master.html',
  styleUrls: ['./configTargetSetting.master.css'],
  
})
export class ConfigTargetSettingMasterUI extends MasterModal<ConfigTargetSetting> {

  constructor(private configTargetSettingService: ConfigTargetSettingService) {
    super(configTargetSettingService);
  }
}