import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Gender } from '../gender';
import { GenderService } from '../gender.service';
import { GenderMasterUI } from '../master/gender.master';
import { GenderEditUI } from '../edit/gender.edit';
import { GenderDeleteUI } from '../delete/gender.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { Person } from '../../../HR/Person/person';
import { CoachEditUI } from '../../../LAD/Coach/edit/coach.edit';
import { Coach } from '../../../LAD/Coach/coach';
import { AssessorEditUI } from '../../../LAD/Assessor/edit/assessor.edit';
import { Assessor } from '../../../LAD/Assessor/assessor';



@Component({
  selector: 'base-gender-index',
  templateUrl: './gender.index.html',
  styleUrls: ['./gender.index.css']
})
export class GenderIndexUI extends IndexView<Gender> implements AfterViewInit, IIndexView<Gender> {

  constructor(private genderService: GenderService) {
    super(genderService);
    this.filterInstance = Gender.SeekInstance();
    this.currentInstance = new Gender();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Person

  public person_Clicked(personEditUI: PersonEditUI) {
    personEditUI.Gender = this.currentInstance;
    personEditUI.ShowDialog(new Person());
  }
                    
  public personEditUI_Closed(person: Person) {
    if (!person)
      return;
    this.onRefresh();
  }
  
  //#endregion Person

  //#region Coach

  public coach_Clicked(coachEditUI: CoachEditUI) {
    coachEditUI.Gender = this.currentInstance;
    coachEditUI.ShowDialog(new Coach());
  }
                    
  public coachEditUI_Closed(coach: Coach) {
    if (!coach)
      return;
    this.onRefresh();
  }
  
  //#endregion Coach

  //#region Assessor

  public assessor_Clicked(assessorEditUI: AssessorEditUI) {
    assessorEditUI.Gender = this.currentInstance;
    assessorEditUI.ShowDialog(new Assessor());
  }
                    
  public assessorEditUI_Closed(assessor: Assessor) {
    if (!assessor)
      return;
    this.onRefresh();
  }
  
  //#endregion Assessor


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(genderEditUI: GenderEditUI){
    genderEditUI.ShowDialog(new Gender());
  }

  resetFilter() {
    this.filterInstance = Gender.SeekInstance();
    
    
  }

  public onEditModalClosed(gender: Gender) {
    this.onRefresh();
    this.currentInstance = new Gender();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}