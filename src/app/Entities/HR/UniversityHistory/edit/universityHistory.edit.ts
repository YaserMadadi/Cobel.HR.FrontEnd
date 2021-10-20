import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { UniversityHistory } from '../universityHistory';
import { UniversityHistoryService } from '../universityHistory.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { UniversityDegree } from '../../../Base/UniversityDegree/universityDegree';
import { UniversityDegreeEditUI } from '../../../Base/UniversityDegree/edit/universityDegree.edit';
import { University } from '../../../Base/University/university';
import { UniversityEditUI } from '../../../Base/University/edit/university.edit';
import { FieldOfStudy } from '../../../Base/FieldOfStudy/fieldOfStudy';
import { FieldOfStudyEditUI } from '../../../Base/FieldOfStudy/edit/fieldOfStudy.edit';
import { EducationSystem } from '../../../Base/EducationSystem/educationSystem';
import { EducationSystemEditUI } from '../../../Base/EducationSystem/edit/educationSystem.edit';
import { CertificationType } from '../../../Base/CertificationType/certificationType';
import { CertificationTypeEditUI } from '../../../Base/CertificationType/edit/certificationType.edit';



@Component({
  selector: 'hr-universityHistory-edit',
  templateUrl: './universityHistory.edit.html',
  styleUrls: ['./universityHistory.edit.css']
})
export class UniversityHistoryEditUI extends EditModal<UniversityHistory> implements IEditModal<UniversityHistory>  {
  
  constructor(private universityHistoryService: UniversityHistoryService) {
    super(universityHistoryService); 
    this.currentInstance = new UniversityHistory();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.universityHistoryService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- UniversityDegree --

  universityDegreeComponent : ForeignComponent<UniversityDegree> = new ForeignComponent<UniversityDegree>(this.universityHistoryService.UniversityDegreeService);

  @Input()
  public set UniversityDegree(value: UniversityDegree) {
    this.currentInstance.universityDegree = this.universityDegreeComponent.instance = value;
  }  


  //#endregion -- UniversityDegree --
	//#region -- University --

  universityComponent : ForeignComponent<University> = new ForeignComponent<University>(this.universityHistoryService.UniversityService);

  @Input()
  public set University(value: University) {
    this.currentInstance.university = this.universityComponent.instance = value;
  }  


  //#endregion -- University --
	//#region -- FieldOfStudy --

  fieldOfStudyComponent : ForeignComponent<FieldOfStudy> = new ForeignComponent<FieldOfStudy>(this.universityHistoryService.FieldOfStudyService);

  @Input()
  public set FieldOfStudy(value: FieldOfStudy) {
    this.currentInstance.fieldOfStudy = this.fieldOfStudyComponent.instance = value;
  }  


  //#endregion -- FieldOfStudy --
	//#region -- EducationSystem --

  educationSystemComponent : ForeignComponent<EducationSystem> = new ForeignComponent<EducationSystem>(this.universityHistoryService.EducationSystemService);

  @Input()
  public set EducationSystem(value: EducationSystem) {
    this.currentInstance.educationSystem = this.educationSystemComponent.instance = value;
  }  


  //#endregion -- EducationSystem --
	//#region -- CertificationType --

  certificationTypeComponent : ForeignComponent<CertificationType> = new ForeignComponent<CertificationType>(this.universityHistoryService.CertificationTypeService);

  @Input()
  public set CertificationType(value: CertificationType) {
    this.currentInstance.certificationType = this.certificationTypeComponent.instance = value;
  }  


  //#endregion -- CertificationType --
	//#endregion

  @ViewChild('universityHistoryEditUI')
  private universityHistoryEditUI: NgForm;

  Init(universityHistory: UniversityHistory = new UniversityHistory()) {
    if (universityHistory.isNew)
      this.universityHistoryEditUI.reset();
    this.InitUniversityHistory(universityHistory);
    this.loadLists();
  }

  private loadLists() {
    
    this.universityDegreeComponent.LoadList();
		this.educationSystemComponent.LoadList();
		this.certificationTypeComponent.LoadList();
  }
  
  InitUniversityHistory(universityHistory: UniversityHistory){
    this.currentInstance = this.service.CreateInstance();
    if (!universityHistory.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = universityHistory.person;
			this.universityDegreeComponent.instance = universityHistory.universityDegree;
			this.universityComponent.instance = universityHistory.university;
			this.fieldOfStudyComponent.instance = universityHistory.fieldOfStudy;
			this.educationSystemComponent.instance = universityHistory.educationSystem;
			this.certificationTypeComponent.instance = universityHistory.certificationType;
    } else {
      universityHistory.person = this.personComponent.instance;
			universityHistory.universityDegree = this.universityDegreeComponent.instance;
			universityHistory.university = this.universityComponent.instance;
			universityHistory.fieldOfStudy = this.fieldOfStudyComponent.instance;
			universityHistory.educationSystem = this.educationSystemComponent.instance;
			universityHistory.certificationType = this.certificationTypeComponent.instance;
    }
    this.currentInstance = universityHistory;
  }

  ResetForm() {
    this.Person = new Person();
		this.UniversityDegree = new UniversityDegree();
		this.University = new University();
		this.FieldOfStudy = new FieldOfStudy();
		this.EducationSystem = new EducationSystem();
		this.CertificationType = new CertificationType();
  }
}