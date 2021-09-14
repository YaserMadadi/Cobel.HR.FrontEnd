import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Coach } from '../coach';
import { CoachService } from '../coach.service';
import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';



@Component({
  selector: 'lad-coach-edit',
  templateUrl: './coach.edit.html',
  styleUrls: ['./coach.edit.css']
})
export class CoachEditUI extends EditModal<Coach> implements IEditModal<Coach>  {
  
  constructor(private coachService: CoachService) {
    super(coachService); 
    this.currentInstance = new Coach();
  }

  //#region Foreign Entities
	
	//#region -- Gender --

  genderComponent : ForeignComponent<Gender> = new ForeignComponent<Gender>(this.coachService.GenderService);

  @Input()
  public set Gender(value: Gender) {
    this.currentInstance.gender = this.genderComponent.instance = value;
  }  


  //#endregion -- Gender --
	//#endregion

  @ViewChild('coachEditUI')
  private coachEditUI: NgForm;

  Init(coach: Coach = new Coach()) {
    if (coach.isNew)
      this.coachEditUI.reset();
    this.InitCoach(coach);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCoach(coach: Coach){
    this.currentInstance = this.service.CreateInstance();
    if (!coach.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.genderComponent.instance = coach.gender;
    } else {
      coach.gender = this.genderComponent.instance;
    }
    this.currentInstance = coach;
  }

  ResetForm() {
    this.Gender = new Gender();
  }
}