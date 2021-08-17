import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ContractType } from '../contractType';
import { ContractTypeService } from '../contractType.service';

import { Contract } from '../../../HR/Contract/contract';
import { ContractMasterUI } from '../../../HR/Contract/master/contract.master';
import { ContractEditUI } from '../../../HR/Contract/edit/contract.edit';
import { ContractDeleteUI } from '../../../HR/Contract/delete/contract.delete';



@Component({
  selector: 'contractType-contract-detail',
  templateUrl: './contractType-contract.detail.html',
  styleUrls: ['./contractType-contract.detail.css'],
  providers: [ContractTypeService]
}) 

@Injectable()
export class ContractType_Contract_DetailUI extends DetailView<ContractType> {

  constructor(private contractTypeService: ContractTypeService) {
    super(contractTypeService);
  }

  public ContractList : Contract[] = [];
  
  public currentContract : Contract = new Contract();

  private contractType: ContractType = new ContractType();

  @Input()
  public set ContractType(value: ContractType) {
    this.contractType = value;
    this.onReload();
  }

  public get ContractType(): ContractType { return this.contractType }

  public onReload(){
    if (ContractType.NotConfirm(this.contractType))
      return;
    this.contractTypeService
      .ServiceCollection
      .CollectionOfContract(this.contractType)
      .then(contractList => {
        this.ContractList = contractList;
        this.currentContract = new Contract();
      });
  }

  public onSelect(i: number) {
    this.currentContract = this.ContractList[i];
    if (Contract.NotConfirm(this.currentContract))
      this.currentContract = new Contract();
  }

  public onDblClicked(masterUI: ContractMasterUI) {
    if (Contract.NotConfirm(this.currentContract))
      return;
    masterUI.ShowDialog(this.currentContract);
  }

  public onAdd(editUI: ContractEditUI) {
    editUI.ContractType = this.contractType;
    editUI.ShowDialog(new Contract());
  }

  public onEdit(editUI: ContractEditUI) {
    if (Contract.NotConfirm(this.currentContract))
      return;
    editUI.ShowDialog(this.currentContract);
  }

  public onDelete(deleteUI: ContractDeleteUI) {
    if (Contract.NotConfirm(this.currentContract))
      return;
    deleteUI.ShowDialog(this.currentContract);
  }

  public onEditModal_Closed(contract: Contract) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
