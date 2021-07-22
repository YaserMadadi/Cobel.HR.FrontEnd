import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Contract } from '../contract';


@Component({
  selector: 'hr-contract-seek',
  templateUrl: './contract.seek.html',
  styleUrls: ['./contract.seek.css']
})
export class ContractSeekUI extends SeekModal<Contract> {

  contract: Contract = new Contract();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.contract);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}