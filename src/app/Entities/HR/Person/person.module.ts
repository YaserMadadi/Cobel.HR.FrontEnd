import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PersonService } from './person.service';
import { PersonServiceCollection } from './person.service.collection';

import { PersonIndexUI } from './index/person.index';
import { Person_ModuleFunc } from './person.module.func';
import { Person_ModuleMaster } from './person.module.master';


import { CoachingQuestionary_ModuleFunc } from '../../LAD/CoachingQuestionary/coachingQuestionary.module.func';
import { CoachingQuestionary_ModuleMaster } from '../../LAD/CoachingQuestionary/coachingQuestionary.module.master';
import { Employee_ModuleFunc } from '../Employee/employee.module.func';
import { Employee_ModuleMaster } from '../Employee/employee.module.master';
import { Habitancy_ModuleFunc } from '../Habitancy/habitancy.module.func';
import { Habitancy_ModuleMaster } from '../Habitancy/habitancy.module.master';
import { Impersonate_ModuleFunc } from '../../Core/Impersonate/impersonate.module.func';
import { Impersonate_ModuleMaster } from '../../Core/Impersonate/impersonate.module.master';
import { LanguageAbility_ModuleFunc } from '../LanguageAbility/languageAbility.module.func';
import { LanguageAbility_ModuleMaster } from '../LanguageAbility/languageAbility.module.master';
import { Log_ModuleFunc } from '../../Core/Log/log.module.func';
import { Log_ModuleMaster } from '../../Core/Log/log.module.master';
import { MaritalInfo_ModuleFunc } from '../MaritalInfo/maritalInfo.module.func';
import { MaritalInfo_ModuleMaster } from '../MaritalInfo/maritalInfo.module.master';
import { MilitaryService_ModuleFunc } from '../MilitaryService/militaryService.module.func';
import { MilitaryService_ModuleMaster } from '../MilitaryService/militaryService.module.master';
import { Passport_ModuleFunc } from '../Passport/passport.module.func';
import { Passport_ModuleMaster } from '../Passport/passport.module.master';
import { PersonCertificate_ModuleFunc } from '../PersonCertificate/personCertificate.module.func';
import { PersonCertificate_ModuleMaster } from '../PersonCertificate/personCertificate.module.master';
import { PersonConnection_ModuleFunc } from '../PersonConnection/personConnection.module.func';
import { PersonConnection_ModuleMaster } from '../PersonConnection/personConnection.module.master';
import { PersonDrivingLicense_ModuleFunc } from '../PersonDrivingLicense/personDrivingLicense.module.func';
import { PersonDrivingLicense_ModuleMaster } from '../PersonDrivingLicense/personDrivingLicense.module.master';
import { Relative_ModuleFunc } from '../Relative/relative.module.func';
import { Relative_ModuleMaster } from '../Relative/relative.module.master';
import { SchoolHistory_ModuleFunc } from '../SchoolHistory/schoolHistory.module.func';
import { SchoolHistory_ModuleMaster } from '../SchoolHistory/schoolHistory.module.master';
import { UniversityHistory_ModuleFunc } from '../UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../UniversityHistory/universityHistory.module.master';
import { UserAccount_ModuleFunc } from '../../Core/UserAccount/userAccount.module.func';
import { UserAccount_ModuleMaster } from '../../Core/UserAccount/userAccount.module.master';
import { WorkExperience_ModuleFunc } from '../WorkExperience/workExperience.module.func';
import { WorkExperience_ModuleMaster } from '../WorkExperience/workExperience.module.master';

@NgModule({
  declarations: [
    PersonIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Person_ModuleMaster,
		CoachingQuestionary_ModuleMaster,
		Employee_ModuleMaster,
		Habitancy_ModuleMaster,
		Impersonate_ModuleMaster,
		LanguageAbility_ModuleMaster,
		Log_ModuleMaster,
		MaritalInfo_ModuleMaster,
		MilitaryService_ModuleMaster,
		Passport_ModuleMaster,
		PersonCertificate_ModuleMaster,
		PersonConnection_ModuleMaster,
		PersonDrivingLicense_ModuleMaster,
		Relative_ModuleMaster,
		SchoolHistory_ModuleMaster,
		UniversityHistory_ModuleMaster,
		UserAccount_ModuleMaster,
		WorkExperience_ModuleMaster,
  ],
  exports: [
    PersonIndexUI,
		Person_ModuleMaster,
   ]
})
export class PersonModule {}