import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ContractType } from '../contractType';
import { ContractTypeService } from '../contractType.service';
import { ContractTypeDeleteUI } from '../delete/contractType.delete';
import { ContractTypeEditUI } from '../edit/contractType.edit';
import { ContractService } from '../../../HR/Contract/contract.service';



@Component({
  selector: 'base-hr-contractType-master',
  templateUrl: './contractType.master.html',
  styleUrls: ['./contractType.master.css'],
  
})
export class ContractTypeMasterUI extends MasterModal<ContractType> {

  constructor(private contractTypeService: ContractTypeService) {
    super(contractTypeService);
  }
}
