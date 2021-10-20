

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { TargetSettingType } from '../targetSettingType';
import { TargetSettingTypeService } from '../targetSettingType.service';


@Component({
  selector: 'base-pms-targetSettingType-delete',
  templateUrl: './targetSettingType.delete.html',
  styleUrls: ['./targetSettingType.delete.css'],
  
})
export class TargetSettingTypeDeleteUI extends DeleteModal<TargetSettingType> {

    constructor(private targetSettingTypeService: TargetSettingTypeService){
        super(targetSettingTypeService);
    }

}
