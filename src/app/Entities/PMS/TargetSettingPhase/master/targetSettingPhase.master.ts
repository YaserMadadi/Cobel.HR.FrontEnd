import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { TargetSettingPhase } from '../targetSettingPhase';
import { TargetSettingPhaseService } from '../targetSettingPhase.service';
import { TargetSettingPhaseDeleteUI } from '../delete/targetSettingPhase.delete';
import { TargetSettingPhaseEditUI } from '../edit/targetSettingPhase.edit';



@Component({
  selector: 'pms-targetSettingPhase-master',
  templateUrl: './targetSettingPhase.master.html',
  styleUrls: ['./targetSettingPhase.master.css'],
})
export class TargetSettingPhaseMasterUI extends MasterModal<TargetSettingPhase> {

  constructor(private targetSettingPhaseService: TargetSettingPhaseService) {
    super(targetSettingPhaseService);
  }
}
