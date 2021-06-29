import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CoachingSession } from '../coachingSession';
import { CoachingSessionService } from '../coachingSession.service';
import { Coaching } from '../../Coaching/coaching';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';



@Component({
  selector: 'lad-coachingSession-edit',
  templateUrl: './coachingSession.edit.html',
  styleUrls: ['./coachingSession.edit.css']
})
export class CoachingSessionEditUI extends EditModal<CoachingSession> implements IEditModal<CoachingSession>  {
  
  constructor(private coachingSessionService: CoachingSessionService) {
    super(coachingSessionService); 
    this.currentInstance = new CoachingSession();
  }

  //#region Foreign Entities
	
	//#region -- Coaching --

  coachingComponent : ForeignComponent<Coaching> = new ForeignComponent<Coaching>(this.coachingSessionService.CoachingService);

  @Input()
  public set Coaching(value: Coaching) {
    this.currentInstance.coaching = this.coachingComponent.instance = value;
  }  


  //#endregion -- Coaching --
	//#endregion

  @ViewChild('coachingSessionEditUI')
  private coachingSessionEditUI: NgForm;

  Init(coachingSession: CoachingSession = new CoachingSession()) {
    if (coachingSession.isNew)
      this.coachingSessionEditUI.reset();
    this.InitCoachingSession(coachingSession);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCoachingSession(coachingSession: CoachingSession) {
    if (!coachingSession.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.coachingComponent.instance = coachingSession.coaching;
    } else {
      coachingSession.coaching = this.coachingComponent.instance;
    }
    this.currentInstance = coachingSession;
  }

  ResetForm() {
    this.Coaching = new Coaching();
  }
}