import { NgModule } from '@angular/core';

import { AbilityLevelModule } from './AbilityLevel/abilityLevel.module';
import { ContractModule } from './Contract/contract.module';
import { DepartmentModule } from './Department/department.module';
import { EmployeeModule } from './Employee/employee.module';
import { EmployeeDetailModule } from './EmployeeDetail/employeeDetail.module';
import { EmployeeEventModule } from './EmployeeEvent/employeeEvent.module';
import { EmployeeNotificationModule } from './EmployeeNotification/employeeNotification.module';
import { HabitancyModule } from './Habitancy/habitancy.module';
import { LanguageAbilityModule } from './LanguageAbility/languageAbility.module';
import { LevelModule } from './Level/level.module';
import { MaritalInfoModule } from './MaritalInfo/maritalInfo.module';
import { MilitaryServiceModule } from './MilitaryService/militaryService.module';
import { MilitaryServiceExcemptionModule } from './MilitaryServiceExcemption/militaryServiceExcemption.module';
import { MilitaryServiceInclusiveModule } from './MilitaryServiceInclusive/militaryServiceInclusive.module';
import { PassportModule } from './Passport/passport.module';
import { PersonModule } from './Person/person.module';
import { PersonCertificateModule } from './PersonCertificate/personCertificate.module';
import { PersonConnectionModule } from './PersonConnection/personConnection.module';
import { PersonDrivingLicenseModule } from './PersonDrivingLicense/personDrivingLicense.module';
import { PositionModule } from './Position/position.module';
import { PositionAssignmentModule } from './PositionAssignment/positionAssignment.module';
import { PositionAssignmentRepealModule } from './PositionAssignmentRepeal/positionAssignmentRepeal.module';

import { RelativeModule } from './Relative/relative.module';
import { SchoolHistoryModule } from './SchoolHistory/schoolHistory.module';
import { UnitModule } from './Unit/unit.module';
import { UniversityHistoryModule } from './UniversityHistory/universityHistory.module';
import { UniversityTerminateModule } from './UniversityTerminate/universityTerminate.module';
import { WorkExperienceModule } from './WorkExperience/workExperience.module';
import { HR_RouteModule } from './hr.route.module';

@NgModule({
	declarations: [],
	imports: [
		AbilityLevelModule,
		ContractModule,
		DepartmentModule,
		EmployeeModule,
		EmployeeDetailModule,
		EmployeeEventModule,
		EmployeeNotificationModule,
		HabitancyModule,
		LanguageAbilityModule,
		LevelModule,
		MaritalInfoModule,
		MilitaryServiceModule,
		MilitaryServiceExcemptionModule,
		MilitaryServiceInclusiveModule,
		PassportModule,
		PersonModule,
		PersonCertificateModule,
		PersonConnectionModule,
		PersonDrivingLicenseModule,
		PositionModule,
		PositionAssignmentModule,
		PositionAssignmentRepealModule,
		RelativeModule,
		SchoolHistoryModule,
		UnitModule,
		UniversityHistoryModule,
		UniversityTerminateModule,
		WorkExperienceModule,
		HR_RouteModule
	],
	exports: [
		AbilityLevelModule,
		ContractModule,
		DepartmentModule,
		EmployeeModule,
		EmployeeDetailModule,
		EmployeeEventModule,
		EmployeeNotificationModule,
		HabitancyModule,
		LanguageAbilityModule,
		LevelModule,
		MaritalInfoModule,
		MilitaryServiceModule,
		MilitaryServiceExcemptionModule,
		MilitaryServiceInclusiveModule,
		PassportModule,
		PersonModule,
		PersonCertificateModule,
		PersonConnectionModule,
		PersonDrivingLicenseModule,
		PositionModule,
		PositionAssignmentModule,
		PositionAssignmentRepealModule,
		RelativeModule,
		SchoolHistoryModule,
		UnitModule,
		UniversityHistoryModule,
		UniversityTerminateModule,
		WorkExperienceModule,
		HR_RouteModule
	]
})
export class HR_Module { }