

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ContractType } from '../contractType';
import { ContractTypeService } from '../contractType.service';
import { ContractTypeMasterUI } from '../master/contractType.master';
import { ContractTypeEditUI } from '../edit/contractType.edit';
import { ContractTypeDeleteUI } from '../delete/contractType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { ContractEditUI } from '../../../HR/Contract/edit/contract.edit';
import { Contract } from '../../../HR/Contract/contract';



@Component({
  selector: 'base-hr-contractType-index',
  templateUrl: './contractType.index.html',
  styleUrls: ['./contractType.index.css']
})
export class ContractTypeIndexUI extends IndexView<ContractType> implements AfterViewInit, IIndexView<ContractType> {

  constructor(private contractTypeService: ContractTypeService) {
    super(contractTypeService);
    this.filterInstance = ContractType.SeekInstance();
    this.currentInstance = new ContractType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Contract

  public contract_Clicked(contractEditUI: ContractEditUI) {
    contractEditUI.ContractType = this.currentInstance;
    contractEditUI.ShowDialog(new Contract());
  }
                    
  public contractEditUI_Closed(contract: Contract) {
    if (!contract)
      return;
    this.onRefresh();
  }
  
  //#endregion Contract


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(contractTypeEditUI: ContractTypeEditUI){
    contractTypeEditUI.ShowDialog(new ContractType());
  }

  resetFilter() {
    this.filterInstance = ContractType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(contractType: ContractType) {
    this.onRefresh();
    this.currentInstance = new ContractType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
