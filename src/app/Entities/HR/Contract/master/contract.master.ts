import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { ContractDeleteUI } from '../delete/contract.delete';
import { ContractEditUI } from '../edit/contract.edit';



@Component({
  selector: 'hr-contract-master',
  templateUrl: './contract.master.html',
  styleUrls: ['./contract.master.css']
})
export class ContractMasterUI extends MasterModal<Contract> {

  constructor(private contractService: ContractService) {
    super(contractService);
  }
}