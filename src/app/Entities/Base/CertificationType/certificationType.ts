import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { UniversityHistory } from '../../HR/UniversityHistory/universityHistory';


@Directive()
export class CertificationType extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CertificationType.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('Base', 'CertificationType', 'Certification Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive: boolean = false;

	//#endregion

  //#region Collection Properties

  public listOfUniversityHistory: UniversityHistory[] = [];

  //#endregion

  
  public get SeekInstance(): CertificationType {
    return CertificationType.SeekInstance();
  }

  public static SeekInstance() : CertificationType {
    let certificationType: CertificationType = new CertificationType();
    certificationType.isActive = null;
    certificationType.ResetPaginate();
    return certificationType;
  }

  public static Validate(certificationType: CertificationType) : boolean {
    let result = Validator.Validate(certificationType.title);
    if(result === false)
      console.log('CertificationType is unvalid : ', certificationType);
    return result;
  }
}