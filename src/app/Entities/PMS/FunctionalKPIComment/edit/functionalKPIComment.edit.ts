import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FunctionalKPIComment } from '../functionalKPIComment';
import { FunctionalKPICommentService } from '../functionalKPIComment.service';
import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AuthService } from '../../../../../xcore/security/auth_service';



@Component({
  selector: 'pms-functionalKPIComment-edit',
  templateUrl: './functionalKPIComment.edit.html',
  styleUrls: ['./functionalKPIComment.edit.css']
})
export class FunctionalKPICommentEditUI extends EditModal<FunctionalKPIComment> implements IEditModal<FunctionalKPIComment>  {
  
  constructor(private functionalKPICommentService: FunctionalKPICommentService) {
    super(functionalKPICommentService); 
    this.currentInstance = new FunctionalKPIComment();
  }

  //#region Foreign Entities
	
	//#region -- FunctionalKPI --

  functionalKPIComponent : ForeignComponent<FunctionalKPI> = new ForeignComponent<FunctionalKPI>(this.functionalKPICommentService.FunctionalKPIService);

  @Input()
  public set FunctionalKPI(value: FunctionalKPI) {
    this.currentInstance.functionalKPI = this.functionalKPIComponent.instance = value;
  }  


  //#endregion -- FunctionalKPI --
	//#region -- Commenter --

  commenterComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.functionalKPICommentService.EmployeeService);

  @Input()
  public set Commenter(value: Employee) {
    this.currentInstance.commenter = this.commenterComponent.instance = value;
  }  


  //#endregion -- Commenter --
	//#endregion

  @ViewChild('functionalKPICommentEditUI')
  private functionalKPICommentEditUI: NgForm;

  Init(functionalKPIComment: FunctionalKPIComment = new FunctionalKPIComment()) {
    if (functionalKPIComment.isNew)
      this.functionalKPICommentEditUI.reset();
    this.InitFunctionalKPIComment(functionalKPIComment);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFunctionalKPIComment(functionalKPIComment: FunctionalKPIComment) {
    if (!functionalKPIComment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.functionalKPIComponent.instance = functionalKPIComment.functionalKPI;
			this.commenterComponent.instance = functionalKPIComment.commenter;
    } else {
      functionalKPIComment.functionalKPI = this.functionalKPIComponent.instance;
			functionalKPIComment.commenter = this.commenterComponent.instance;
    }
    functionalKPIComment.commenter = AuthService.currentEmployee;
    this.currentInstance = functionalKPIComment;
  }

  ResetForm() {
    this.FunctionalKPI = new FunctionalKPI();
		this.Commenter = new Employee();
  }
}