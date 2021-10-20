import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { PositionAssignmentIndexUI } from './PositionAssignment/index/positionAssignment.index';
import { ContractIndexUI } from './Contract/index/contract.index';
import { PositionAssignmentRepealIndexUI } from './PositionAssignmentRepeal/index/positionAssignmentRepeal.index';
import { EmployeeEventIndexUI } from './EmployeeEvent/index/employeeEvent.index';
import { HabitancyIndexUI } from './Habitancy/index/habitancy.index';
import { EmployeeIndexUI } from './Employee/index/employee.index';
import { LanguageAbilityIndexUI } from './LanguageAbility/index/languageAbility.index';
import { LevelIndexUI } from './Level/index/level.index';
import { MaritalInfoIndexUI } from './MaritalInfo/index/maritalInfo.index';
import { MilitaryServiceIndexUI } from './MilitaryService/index/militaryService.index';
import { MilitaryServiceExcemptionIndexUI } from './MilitaryServiceExcemption/index/militaryServiceExcemption.index';
import { MilitaryServiceInclusiveIndexUI } from './MilitaryServiceInclusive/index/militaryServiceInclusive.index';
import { PassportIndexUI } from './Passport/index/passport.index';
import { PersonCertificateIndexUI } from './PersonCertificate/index/personCertificate.index';
import { PersonConnectionIndexUI } from './PersonConnection/index/personConnection.index';
import { PersonDrivingLicenseIndexUI } from './PersonDrivingLicense/index/personDrivingLicense.index';
import { RelativeIndexUI } from './Relative/index/relative.index';
import { SchoolHistoryIndexUI } from './SchoolHistory/index/schoolHistory.index';
import { EmployeeNotificationIndexUI } from './EmployeeNotification/index/employeeNotification.index';
import { UniversityHistoryIndexUI } from './UniversityHistory/index/universityHistory.index';
import { UniversityTerminateIndexUI } from './UniversityTerminate/index/universityTerminate.index';
import { WorkExperienceIndexUI } from './WorkExperience/index/workExperience.index';
import { AbilityLevelIndexUI } from './AbilityLevel/index/abilityLevel.index';
import { UnitIndexUI } from './Unit/index/unit.index';
import { PositionIndexUI } from './Position/index/position.index';
import { DepartmentIndexUI } from './Department/index/department.index';
import { EmployeeDetailIndexUI } from './EmployeeDetail/index/employeeDetail.index';
import { PersonIndexUI } from './Person/index/person.index';

const hr_routes : Routes = [
  { path: 'AbilityLevel', redirectTo: 'AbilityLevel/0' },
	{ path: 'AbilityLevel/:id', component: AbilityLevelIndexUI, canActivate: [AuthGuard], data: { title: 'AbilityLevel' }  },
	{ path: 'Contract', redirectTo: 'Contract/0' },
	{ path: 'Contract/:id', component: ContractIndexUI, canActivate: [AuthGuard], data: { title: 'Contract' }  },
	{ path: 'Department', redirectTo: 'Department/0' },
	{ path: 'Department/:id', component: DepartmentIndexUI, canActivate: [AuthGuard], data: { title: 'Department' }  },
	{ path: 'Employee', redirectTo: 'Employee/0' },
	{ path: 'Employee/:id', component: EmployeeIndexUI, canActivate: [AuthGuard], data: { title: 'Employee' }  },
	{ path: 'EmployeeDetail', redirectTo: 'EmployeeDetail/0' },
	{ path: 'EmployeeDetail/:id', component: EmployeeDetailIndexUI, canActivate: [AuthGuard], data: { title: 'EmployeeDetail' }  },
	{ path: 'EmployeeEvent', redirectTo: 'EmployeeEvent/0' },
	{ path: 'EmployeeEvent/:id', component: EmployeeEventIndexUI, canActivate: [AuthGuard], data: { title: 'EmployeeEvent' }  },
	{ path: 'EmployeeNotification', redirectTo: 'EmployeeNotification/0' },
	{ path: 'EmployeeNotification/:id', component: EmployeeNotificationIndexUI, canActivate: [AuthGuard], data: { title: 'EmployeeNotification' }  },
	{ path: 'Habitancy', redirectTo: 'Habitancy/0' },
	{ path: 'Habitancy/:id', component: HabitancyIndexUI, canActivate: [AuthGuard], data: { title: 'Habitancy' }  },
	{ path: 'LanguageAbility', redirectTo: 'LanguageAbility/0' },
	{ path: 'LanguageAbility/:id', component: LanguageAbilityIndexUI, canActivate: [AuthGuard], data: { title: 'LanguageAbility' }  },
	{ path: 'Level', redirectTo: 'Level/0' },
	{ path: 'Level/:id', component: LevelIndexUI, canActivate: [AuthGuard], data: { title: 'Level' }  },
	{ path: 'MaritalInfo', redirectTo: 'MaritalInfo/0' },
	{ path: 'MaritalInfo/:id', component: MaritalInfoIndexUI, canActivate: [AuthGuard], data: { title: 'MaritalInfo' }  },
	{ path: 'MilitaryService', redirectTo: 'MilitaryService/0' },
	{ path: 'MilitaryService/:id', component: MilitaryServiceIndexUI, canActivate: [AuthGuard], data: { title: 'MilitaryService' }  },
	{ path: 'MilitaryServiceExcemption', redirectTo: 'MilitaryServiceExcemption/0' },
	{ path: 'MilitaryServiceExcemption/:id', component: MilitaryServiceExcemptionIndexUI, canActivate: [AuthGuard], data: { title: 'MilitaryServiceExcemption' }  },
	{ path: 'MilitaryServiceInclusive', redirectTo: 'MilitaryServiceInclusive/0' },
	{ path: 'MilitaryServiceInclusive/:id', component: MilitaryServiceInclusiveIndexUI, canActivate: [AuthGuard], data: { title: 'MilitaryServiceInclusive' }  },
	{ path: 'Passport', redirectTo: 'Passport/0' },
	{ path: 'Passport/:id', component: PassportIndexUI, canActivate: [AuthGuard], data: { title: 'Passport' }  },
	{ path: 'Person', redirectTo: 'Person/0' },
	{ path: 'Person/:id', component: PersonIndexUI, canActivate: [AuthGuard], data: { title: 'Person' }  },
	{ path: 'PersonCertificate', redirectTo: 'PersonCertificate/0' },
	{ path: 'PersonCertificate/:id', component: PersonCertificateIndexUI, canActivate: [AuthGuard], data: { title: 'PersonCertificate' }  },
	{ path: 'PersonConnection', redirectTo: 'PersonConnection/0' },
	{ path: 'PersonConnection/:id', component: PersonConnectionIndexUI, canActivate: [AuthGuard], data: { title: 'PersonConnection' }  },
	{ path: 'PersonDrivingLicense', redirectTo: 'PersonDrivingLicense/0' },
	{ path: 'PersonDrivingLicense/:id', component: PersonDrivingLicenseIndexUI, canActivate: [AuthGuard], data: { title: 'PersonDrivingLicense' }  },
	{ path: 'Position', redirectTo: 'Position/0' },
	{ path: 'Position/:id', component: PositionIndexUI, canActivate: [AuthGuard], data: { title: 'Position' }  },
	{ path: 'PositionAssignment', redirectTo: 'PositionAssignment/0' },
	{ path: 'PositionAssignment/:id', component: PositionAssignmentIndexUI, canActivate: [AuthGuard], data: { title: 'PositionAssignment' }  },
	{ path: 'PositionAssignmentRepeal', redirectTo: 'PositionAssignmentRepeal/0' },
	{ path: 'PositionAssignmentRepeal/:id', component: PositionAssignmentRepealIndexUI, canActivate: [AuthGuard], data: { title: 'PositionAssignmentRepeal' }  },
	{ path: 'Relative', redirectTo: 'Relative/0' },
	{ path: 'Relative/:id', component: RelativeIndexUI, canActivate: [AuthGuard], data: { title: 'Relative' }  },
	{ path: 'SchoolHistory', redirectTo: 'SchoolHistory/0' },
	{ path: 'SchoolHistory/:id', component: SchoolHistoryIndexUI, canActivate: [AuthGuard], data: { title: 'SchoolHistory' }  },
	{ path: 'Unit', redirectTo: 'Unit/0' },
	{ path: 'Unit/:id', component: UnitIndexUI, canActivate: [AuthGuard], data: { title: 'Unit' }  },
	{ path: 'UniversityHistory', redirectTo: 'UniversityHistory/0' },
	{ path: 'UniversityHistory/:id', component: UniversityHistoryIndexUI, canActivate: [AuthGuard], data: { title: 'UniversityHistory' }  },
	{ path: 'UniversityTerminate', redirectTo: 'UniversityTerminate/0' },
	{ path: 'UniversityTerminate/:id', component: UniversityTerminateIndexUI, canActivate: [AuthGuard], data: { title: 'UniversityTerminate' }  },
	{ path: 'WorkExperience', redirectTo: 'WorkExperience/0' },
	{ path: 'WorkExperience/:id', component: WorkExperienceIndexUI, canActivate: [AuthGuard], data: { title: 'WorkExperience' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(hr_routes)
  ],
  exports: [RouterModule]
})

export class HR_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'HR', loadChildren: () => import('./Entities/HR/hr.module').then(x => x.HR_Module) }