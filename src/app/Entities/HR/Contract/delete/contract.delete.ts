import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Contract } from '../contract';
import { ContractService } from '../contract.service';


@Component({
  selector: 'hr-contract-delete',
  templateUrl: './contract.delete.html',
  styleUrls: ['./contract.delete.css'],
  
})
export class ContractDeleteUI extends DeleteModal<Contract> {

    constructor(private contractService: ContractService){
        super(contractService);
    }

}