import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Position } from '../../../HR/Position/position';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AppraiseResult } from '../appraiseResult';
import { AppraiseResultService } from '../appraiseResult.service';
import { AppraiseResultDeleteUI } from '../delete/appraiseResult.delete';
import { AppraiseResultEditUI } from '../edit/appraiseResult.edit';
import { TargetSetting } from '../../TargetSetting/targetSetting';



@Component({
  selector: 'pms-appraiseResult-master',
  templateUrl: './appraiseResult.master.html',
  styleUrls: ['./appraiseResult.master.css']
})
export class AppraiseResultMasterUI extends MasterModal<AppraiseResult> {

  constructor(private appraiseResultService: AppraiseResultService) {
    super(appraiseResultService);
  }

  public onShown() {

    this.appraiseResultService.TargetSettingService.RetrieveById(this.currentInstance.targetSetting.id)
      .then(targetSetting => {
        if (TargetSetting.NotConfirm(targetSetting))
          return;
        this.appraiseResultService.TargetSettingService.PositionService.RetrieveById(targetSetting.position.id)
          .then(position => {
            if (Position.NotConfirm(position))
              return;
            this.position = position;
          });
      });

      
  }

  position: Position = new Position();
}