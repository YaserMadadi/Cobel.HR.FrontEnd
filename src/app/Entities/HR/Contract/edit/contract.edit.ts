import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { ContractType } from '../../../Base.HR/ContractType/contractType';
import { ContractTypeEditUI } from '../../../Base.HR/ContractType/edit/contractType.edit';



@Component({
  selector: 'hr-contract-edit',
  templateUrl: './contract.edit.html',
  styleUrls: ['./contract.edit.css']
})
export class ContractEditUI extends EditModal<Contract> implements IEditModal<Contract>  {
  
  constructor(private contractService: ContractService) {
    super(contractService); 
    this.currentInstance = new Contract();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.contractService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- ContractType --

  contractTypeComponent : ForeignComponent<ContractType> = new ForeignComponent<ContractType>(this.contractService.ContractTypeService);

  @Input()
  public set ContractType(value: ContractType) {
    this.currentInstance.contractType = this.contractTypeComponent.instance = value;
  }  


  //#endregion -- ContractType --
	//#endregion

  @ViewChild('contractEditUI')
  private contractEditUI: NgForm;

  Init(contract: Contract = new Contract()) {
    if (contract.isNew)
      this.contractEditUI.reset();
    this.InitContract(contract);
    this.loadLists();
  }

  private loadLists() {
    
    this.contractTypeComponent.LoadList();
  }
  
  InitContract(contract: Contract) {
    if (!contract.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = contract.employee;
			this.contractTypeComponent.instance = contract.contractType;
    } else {
      contract.employee = this.employeeComponent.instance;
			contract.contractType = this.contractTypeComponent.instance;
    }
    this.currentInstance = contract;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.ContractType = new ContractType();
  }
}