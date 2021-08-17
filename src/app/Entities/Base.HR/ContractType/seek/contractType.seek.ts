
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ContractType } from '../contractType';


@Component({
  selector: 'base-hr-contractType-seek',
  templateUrl: './contractType.seek.html',
  styleUrls: ['./contractType.seek.css']
})
export class ContractTypeSeekUI extends SeekModal<ContractType> {

  contractType: ContractType = new ContractType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.contractType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
