import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityTerminate } from '../UniversityTerminate/universityTerminate';
import { Person } from '../Person/person';
import { UniversityDegree } from '../../Base/UniversityDegree/universityDegree';
import { University } from '../../Base/University/university';
import { FieldOfStudy } from '../../Base/FieldOfStudy/fieldOfStudy';
import { EducationSystem } from '../../Base/EducationSystem/educationSystem';
import { CertificationType } from '../../Base/CertificationType/certificationType';


@Directive()
export class UniversityHistory extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UniversityHistory.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'UniversityHistory', 'University History');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public universityDegree: UniversityDegree = new UniversityDegree();
	
	public university: University = new University();
	
	public fieldOfStudy: FieldOfStudy = new FieldOfStudy();
	
	public educationSystem: EducationSystem = new EducationSystem();
	
	public certificationType: CertificationType = new CertificationType();
	
	public startDate: Date = new Date();
	
	public comment: string = '';

	//#endregion

  //#region Collection Properties

  public listOfUniversityTerminate: UniversityTerminate[] = [];

  //#endregion

  
  public get SeekInstance(): UniversityHistory {
    return UniversityHistory.SeekInstance();
  }

  public static SeekInstance() : UniversityHistory {
    let universityHistory: UniversityHistory = new UniversityHistory();
    universityHistory.startDate = null;
    universityHistory.ResetPaginate();
    return universityHistory;
  }

  public static Validate(universityHistory: UniversityHistory) : boolean {
    let result = Validator.Validate(universityHistory.person) &&
					Validator.Validate(universityHistory.universityDegree) &&
					Validator.Validate(universityHistory.university) &&
					Validator.Validate(universityHistory.fieldOfStudy) &&
					Validator.Validate(universityHistory.educationSystem) &&
					Validator.Validate(universityHistory.certificationType);
    if(result === false)
      console.log('UniversityHistory is unvalid : ', universityHistory);
    return result;
  }
}