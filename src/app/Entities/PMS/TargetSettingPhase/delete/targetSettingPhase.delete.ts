

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { TargetSettingPhase } from '../targetSettingPhase';
import { TargetSettingPhaseService } from '../targetSettingPhase.service';


@Component({
  selector: 'pms-targetSettingPhase-delete',
  templateUrl: './targetSettingPhase.delete.html',
  styleUrls: ['./targetSettingPhase.delete.css'],
})
export class TargetSettingPhaseDeleteUI extends DeleteModal<TargetSettingPhase> {

    constructor(private targetSettingPhaseService: TargetSettingPhaseService){
        super(targetSettingPhaseService);
    }

}
