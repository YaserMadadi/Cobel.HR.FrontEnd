import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Contract } from '../../Contract/contract';
import { ContractMasterUI } from '../../Contract/master/contract.master';
import { ContractEditUI } from '../../Contract/edit/contract.edit';
import { ContractDeleteUI } from '../../Contract/delete/contract.delete';



@Component({
  selector: 'employee-contract-detail',
  templateUrl: './employee-contract.detail.html',
  styleUrls: ['./employee-contract.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_Contract_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public ContractList : Contract[] = [];
  
  public currentContract : Contract = new Contract();

  private employee: Employee = new Employee();

  @Input()
  public set Employee(value: Employee) {
    this.employee = value;
    this.onReload();
  }

  public get Employee(): Employee { return this.employee }

  public onReload(){
    if (Employee.NotConfirm(this.employee))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfContract(this.employee)
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
    editUI.Employee = this.employee;
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