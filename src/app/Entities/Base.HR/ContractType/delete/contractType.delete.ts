

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ContractType } from '../contractType';
import { ContractTypeService } from '../contractType.service';


@Component({
  selector: 'base-hr-contractType-delete',
  templateUrl: './contractType.delete.html',
  styleUrls: ['./contractType.delete.css'],
  providers: [ContractTypeService]
})
export class ContractTypeDeleteUI extends DeleteModal<ContractType> {

    constructor(private contractTypeService: ContractTypeService){
        super(contractTypeService);
    }

}
