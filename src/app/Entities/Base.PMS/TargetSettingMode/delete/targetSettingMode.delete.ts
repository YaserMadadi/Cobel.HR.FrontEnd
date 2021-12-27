

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { TargetSettingMode } from '../targetSettingMode';
import { TargetSettingModeService } from '../targetSettingMode.service';


@Component({
  selector: 'base-pms-targetSettingMode-delete',
  templateUrl: './targetSettingMode.delete.html',
  styleUrls: ['./targetSettingMode.delete.css'],
  
})
export class TargetSettingModeDeleteUI extends DeleteModal<TargetSettingMode> {

    constructor(private targetSettingModeService: TargetSettingModeService){
        super(targetSettingModeService);
    }

}
