import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';


@Component({
  selector: 'pms-targetSetting-delete',
  templateUrl: './targetSetting.delete.html',
  styleUrls: ['./targetSetting.delete.css'],
  
})
export class TargetSettingDeleteUI extends DeleteModal<TargetSetting> {

    constructor(private targetSettingService: TargetSettingService){
        super(targetSettingService);
    }

}