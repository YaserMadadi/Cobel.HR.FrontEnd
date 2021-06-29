import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { VisionComment } from '../visionComment';
import { VisionCommentService } from '../visionComment.service';
import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';



@Component({
  selector: 'pms-visionComment-edit',
  templateUrl: './visionComment.edit.html',
  styleUrls: ['./visionComment.edit.css']
})
export class VisionCommentEditUI extends EditModal<VisionComment> implements IEditModal<VisionComment>  {
  
  constructor(private visionCommentService: VisionCommentService) {
    super(visionCommentService); 
    this.currentInstance = new VisionComment();
  }

  //#region Foreign Entities
	
	//#region -- Vision --

  visionComponent : ForeignComponent<Vision> = new ForeignComponent<Vision>(this.visionCommentService.VisionService);

  @Input()
  public set Vision(value: Vision) {
    this.currentInstance.vision = this.visionComponent.instance = value;
  }  


  //#endregion -- Vision --
	//#region -- Commentator --

  commentatorComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.visionCommentService.EmployeeService);

  @Input()
  public set Commentator(value: Employee) {
    this.currentInstance.commentator = this.commentatorComponent.instance = value;
  }  


  //#endregion -- Commentator --
	//#endregion

  @ViewChild('visionCommentEditUI')
  private visionCommentEditUI: NgForm;

  Init(visionComment: VisionComment = new VisionComment()) {
    if (visionComment.isNew)
      this.visionCommentEditUI.reset();
    this.InitVisionComment(visionComment);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitVisionComment(visionComment: VisionComment) {
    if (!visionComment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.visionComponent.instance = visionComment.vision;
			this.commentatorComponent.instance = visionComment.commentator;
    } else {
      visionComment.vision = this.visionComponent.instance;
			visionComment.commentator = this.commentatorComponent.instance;
    }
    this.currentInstance = visionComment;
  }

  ResetForm() {
    this.Vision = new Vision();
		this.Commentator = new Employee();
  }
}