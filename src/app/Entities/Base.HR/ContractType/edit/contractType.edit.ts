

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ContractType } from '../contractType';
import { ContractTypeService } from '../contractType.service';



@Component({
  selector: 'base-hr-contractType-edit',
  templateUrl: './contractType.edit.html',
  styleUrls: ['./contractType.edit.css']
})
export class ContractTypeEditUI extends EditModal<ContractType> implements IEditModal<ContractType>  {
  
  constructor(private contractTypeService: ContractTypeService) {
    super(contractTypeService); 
    this.currentInstance = new ContractType();
  }

  

  @ViewChild('contractTypeEditUI')
  private contractTypeEditUI: NgForm;

  Init(contractType: ContractType = new ContractType()) {
    if (contractType.isNew)
      this.contractTypeEditUI.reset();
    this.InitContractType(contractType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitContractType(contractType: ContractType) {
    if (!contractType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = contractType;
  }

  ResetForm() {
    
  }
}
