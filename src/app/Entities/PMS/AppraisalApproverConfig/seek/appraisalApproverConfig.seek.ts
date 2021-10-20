import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AppraisalApproverConfig } from '../appraisalApproverConfig';


@Component({
  selector: 'pms-appraisalApproverConfig-seek',
  templateUrl: './appraisalApproverConfig.seek.html',
  styleUrls: ['./appraisalApproverConfig.seek.css']
})
export class AppraisalApproverConfigSeekUI extends SeekModal<AppraisalApproverConfig> {

  appraisalApproverConfig: AppraisalApproverConfig = new AppraisalApproverConfig();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.appraisalApproverConfig);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}