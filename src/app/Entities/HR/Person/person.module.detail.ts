import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonService } from './person.service';
import { PersonServiceCollection } from './person.service.collection';


import { ResponsiblePerson_CoachingQuestionary_DetailUI } from './detail/responsiblePerson-coachingQuestionary.detail';
import { CoachingQuestionary_ModuleMaster } from '../../LAD/CoachingQuestionary/coachingQuestionary.module.master';
import { Person_Employee_DetailUI } from './detail/person-employee.detail';
import { Employee_ModuleMaster } from '../Employee/employee.module.master';
import { Person_Habitancy_DetailUI } from './detail/person-habitancy.detail';
import { Habitancy_ModuleMaster } from '../Habitancy/habitancy.module.master';
import { Person_LanguageAbility_DetailUI } from './detail/person-languageAbility.detail';
import { LanguageAbility_ModuleMaster } from '../LanguageAbility/languageAbility.module.master';
import { Person_Log_DetailUI } from './detail/person-log.detail';
import { Log_ModuleMaster } from '../../Core/Log/log.module.master';
import { Person_MaritalInfo_DetailUI } from './detail/person-maritalInfo.detail';
import { MaritalInfo_ModuleMaster } from '../MaritalInfo/maritalInfo.module.master';
import { Person_MilitaryService_DetailUI } from './detail/person-militaryService.detail';
import { MilitaryService_ModuleMaster } from '../MilitaryService/militaryService.module.master';
import { Person_Passport_DetailUI } from './detail/person-passport.detail';
import { Passport_ModuleMaster } from '../Passport/passport.module.master';
import { Person_PersonCertificate_DetailUI } from './detail/person-personCertificate.detail';
import { PersonCertificate_ModuleMaster } from '../PersonCertificate/personCertificate.module.master';
import { Person_PersonConnection_DetailUI } from './detail/person-personConnection.detail';
import { PersonConnection_ModuleMaster } from '../PersonConnection/personConnection.module.master';
import { Person_PersonDrivingLicense_DetailUI } from './detail/person-personDrivingLicense.detail';
import { PersonDrivingLicense_ModuleMaster } from '../PersonDrivingLicense/personDrivingLicense.module.master';
import { Peson_Relative_DetailUI } from './detail/peson-relative.detail';
import { Relative_ModuleMaster } from '../Relative/relative.module.master';
import { Person_SchoolHistory_DetailUI } from './detail/person-schoolHistory.detail';
import { SchoolHistory_ModuleMaster } from '../SchoolHistory/schoolHistory.module.master';
import { Person_UniversityHistory_DetailUI } from './detail/person-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../UniversityHistory/universityHistory.module.master';
import { Person_UserAccount_DetailUI } from './detail/person-userAccount.detail';
import { UserAccount_ModuleMaster } from '../../Core/UserAccount/userAccount.module.master';
import { Person_WorkExperience_DetailUI } from './detail/person-workExperience.detail';
import { WorkExperience_ModuleMaster } from '../WorkExperience/workExperience.module.master';

@NgModule({
	declarations: [
		ResponsiblePerson_CoachingQuestionary_DetailUI,
		Person_Employee_DetailUI,
		Person_Habitancy_DetailUI,
		Person_LanguageAbility_DetailUI,
		Person_Log_DetailUI,
		Person_MaritalInfo_DetailUI,
		Person_MilitaryService_DetailUI,
		Person_Passport_DetailUI,
		Person_PersonCertificate_DetailUI,
		Person_PersonConnection_DetailUI,
		Person_PersonDrivingLicense_DetailUI,
		Peson_Relative_DetailUI,
		Person_SchoolHistory_DetailUI,
		Person_UniversityHistory_DetailUI,
		Person_UserAccount_DetailUI,
		Person_WorkExperience_DetailUI
	],
	imports: [
		FormsModule,
		CommonModule,
		SharedModule,
		CoachingQuestionary_ModuleMaster,
		Employee_ModuleMaster,
		Habitancy_ModuleMaster,
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
		ResponsiblePerson_CoachingQuestionary_DetailUI,
		Person_Employee_DetailUI,
		Person_Habitancy_DetailUI,
		Person_LanguageAbility_DetailUI,
		Person_Log_DetailUI,
		Person_MaritalInfo_DetailUI,
		Person_MilitaryService_DetailUI,
		Person_Passport_DetailUI,
		Person_PersonCertificate_DetailUI,
		Person_PersonConnection_DetailUI,
		Person_PersonDrivingLicense_DetailUI,
		Peson_Relative_DetailUI,
		Person_SchoolHistory_DetailUI,
		Person_UniversityHistory_DetailUI,
		Person_UserAccount_DetailUI,
		Person_WorkExperience_DetailUI
	],
	providers: [
		//PersonService,
		//PersonServiceCollection
	]
})
export class Person_ModuleDetail { }