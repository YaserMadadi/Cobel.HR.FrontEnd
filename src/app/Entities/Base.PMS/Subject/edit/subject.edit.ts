import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';



@Component({
  selector: 'base-pms-subject-edit',
  templateUrl: './subject.edit.html',
  styleUrls: ['./subject.edit.css']
})
export class SubjectEditUI extends EditModal<Subject> implements IEditModal<Subject>  {
  
  constructor(private subjectService: SubjectService) {
    super(subjectService); 
    this.currentInstance = new Subject();
  }

  

  @ViewChild('subjectEditUI')
  private subjectEditUI: NgForm;

  Init(subject: Subject = new Subject()) {
    if (subject.isNew)
      this.subjectEditUI.reset();
    this.InitSubject(subject);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitSubject(subject: Subject) {
    if (!subject.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = subject;
  }

  ResetForm() {
    
  }
}