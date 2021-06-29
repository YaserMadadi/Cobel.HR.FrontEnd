import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Department } from '../department';
import { DepartmentService } from '../department.service';



@Component({
  selector: 'hr-department-edit',
  templateUrl: './department.edit.html',
  styleUrls: ['./department.edit.css']
})
export class DepartmentEditUI extends EditModal<Department> implements IEditModal<Department>  {
  
  constructor(private departmentService: DepartmentService) {
    super(departmentService); 
    this.currentInstance = new Department();
  }

  

  @ViewChild('departmentEditUI')
  private departmentEditUI: NgForm;

  Init(department: Department = new Department()) {
    if (department.isNew)
      this.departmentEditUI.reset();
    this.InitDepartment(department);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDepartment(department: Department) {
    if (!department.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = department;
  }

  ResetForm() {
    
  }
}