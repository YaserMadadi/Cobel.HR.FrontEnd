import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';


@Component({
  selector: 'pms-configTargetSetting-delete',
  templateUrl: './configTargetSetting.delete.html',
  styleUrls: ['./configTargetSetting.delete.css'],
  
})
export class ConfigTargetSettingDeleteUI extends DeleteModal<ConfigTargetSetting> {

    constructor(private configTargetSettingService: ConfigTargetSettingService){
        super(configTargetSettingService);
    }

}