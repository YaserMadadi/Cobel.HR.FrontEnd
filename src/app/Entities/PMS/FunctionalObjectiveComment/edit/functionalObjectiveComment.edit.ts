import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FunctionalObjectiveComment } from '../functionalObjectiveComment';
import { FunctionalObjectiveCommentService } from '../functionalObjectiveComment.service';
import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'pms-functionalObjectiveComment-edit',
  templateUrl: './functionalObjectiveComment.edit.html',
  styleUrls: ['./functionalObjectiveComment.edit.css']
})
export class FunctionalObjectiveCommentEditUI extends EditModal<FunctionalObjectiveComment> implements IEditModal<FunctionalObjectiveComment>  {
  
  constructor(private functionalObjectiveCommentService: FunctionalObjectiveCommentService) {
    super(functionalObjectiveCommentService); 
    this.currentInstance = new FunctionalObjectiveComment();
  }

  //#region Foreign Entities
	
	//#region -- FunctionalObjective --

  functionalObjectiveComponent : ForeignComponent<FunctionalObjective> = new ForeignComponent<FunctionalObjective>(this.functionalObjectiveCommentService.FunctionalObjectiveService);

  @Input()
  public set FunctionalObjective(value: FunctionalObjective) {
    this.currentInstance.functionalObjective = this.functionalObjectiveComponent.instance = value;
  }  


  //#endregion -- FunctionalObjective --
	//#region -- Commenter --

  commenterComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.functionalObjectiveCommentService.EmployeeService);

  @Input()
  public set Commenter(value: Employee) {
    this.currentInstance.commenter = this.commenterComponent.instance = value;
  }  


  //#endregion -- Commenter --
	//#endregion

  @ViewChild('functionalObjectiveCommentEditUI')
  private functionalObjectiveCommentEditUI: NgForm;

  Init(functionalObjectiveComment: FunctionalObjectiveComment = new FunctionalObjectiveComment()) {
    if (functionalObjectiveComment.isNew)
      this.functionalObjectiveCommentEditUI.reset();
    this.InitFunctionalObjectiveComment(functionalObjectiveComment);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFunctionalObjectiveComment(functionalObjectiveComment: FunctionalObjectiveComment){
    this.currentInstance = this.service.CreateInstance();
    if (!functionalObjectiveComment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.functionalObjectiveComponent.instance = functionalObjectiveComment.functionalObjective;
			this.commenterComponent.instance = functionalObjectiveComment.commenter;
    } else {
      functionalObjectiveComment.functionalObjective = this.functionalObjectiveComponent.instance;
			functionalObjectiveComment.commenter = this.commenterComponent.instance;
    }
    this.currentInstance = functionalObjectiveComment;
  }

  ResetForm() {
    this.FunctionalObjective = new FunctionalObjective();
		this.Commenter = new Employee();
  }
}