import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { ContractMasterUI } from '../master/contract.master';
import { ContractEditUI } from '../edit/contract.edit';
import { ContractDeleteUI } from '../delete/contract.delete';

import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { ContractType } from '../../../Base.HR/ContractType/contractType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-contract-index',
  templateUrl: './contract.index.html',
  styleUrls: ['./contract.index.css']
})
export class ContractIndexUI extends IndexView<Contract> implements AfterViewInit, IIndexView<Contract> {

  constructor(private contractService: ContractService) {
    super(contractService);
    this.filterInstance = Contract.SeekInstance();
    this.currentInstance = new Contract();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(contractEditUI: ContractEditUI){
    contractEditUI.ShowDialog(new Contract());
  }

  resetFilter() {
    this.filterInstance = Contract.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(contract: Contract) {
    this.onRefresh();
    this.currentInstance = new Contract();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}