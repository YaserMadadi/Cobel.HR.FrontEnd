import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { SchoolLevelIndexUI } from './SchoolLevel/index/schoolLevel.index';
import { UniversityIndexUI } from './University/index/university.index';
import { UniversityDegreeIndexUI } from './UniversityDegree/index/universityDegree.index';
import { UniversityFieldCategoryIndexUI } from './UniversityFieldCategory/index/universityFieldCategory.index';
import { CityIndexUI } from './City/index/city.index';
import { ProvinceIndexUI } from './Province/index/province.index';
import { QuarterIndexUI } from './Quarter/index/quarter.index';
import { YearIndexUI } from './Year/index/year.index';
import { YearQuarterIndexUI } from './YearQuarter/index/yearQuarter.index';
import { CountryIndexUI } from './Country/index/country.index';
import { ReligionIndexUI } from './Religion/index/religion.index';
import { HealthStatusIndexUI } from './HealthStatus/index/healthStatus.index';
import { CertificationTypeIndexUI } from './CertificationType/index/certificationType.index';
import { ConnectionTypeIndexUI } from './ConnectionType/index/connectionType.index';
import { DrivingLicenseTypeIndexUI } from './DrivingLicenseType/index/drivingLicenseType.index';
import { EducationSystemIndexUI } from './EducationSystem/index/educationSystem.index';
import { ExcemptionTypeIndexUI } from './ExcemptionType/index/excemptionType.index';
import { FieldCategoryIndexUI } from './FieldCategory/index/fieldCategory.index';
import { FieldOfStudyIndexUI } from './FieldOfStudy/index/fieldOfStudy.index';
import { GenderIndexUI } from './Gender/index/gender.index';
import { HabitancyTypeIndexUI } from './HabitancyType/index/habitancyType.index';
import { HoldingSectionIndexUI } from './HoldingSection/index/holdingSection.index';
import { InclusiveTypeIndexUI } from './InclusiveType/index/inclusiveType.index';
import { LanguageIndexUI } from './Language/index/language.index';
import { MilitaryServiceStatusIndexUI } from './MilitaryServiceStatus/index/militaryServiceStatus.index';

const base_routes : Routes = [
  { path: 'CertificationType', redirectTo: 'CertificationType/0' },
	{ path: 'CertificationType/:id', component: CertificationTypeIndexUI, canActivate: [AuthGuard], data: { title: 'CertificationType' }  },
	{ path: 'City', redirectTo: 'City/0' },
	{ path: 'City/:id', component: CityIndexUI, canActivate: [AuthGuard], data: { title: 'City' }  },
	{ path: 'ConnectionType', redirectTo: 'ConnectionType/0' },
	{ path: 'ConnectionType/:id', component: ConnectionTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ConnectionType' }  },
	{ path: 'Country', redirectTo: 'Country/0' },
	{ path: 'Country/:id', component: CountryIndexUI, canActivate: [AuthGuard], data: { title: 'Country' }  },
	{ path: 'DrivingLicenseType', redirectTo: 'DrivingLicenseType/0' },
	{ path: 'DrivingLicenseType/:id', component: DrivingLicenseTypeIndexUI, canActivate: [AuthGuard], data: { title: 'DrivingLicenseType' }  },
	{ path: 'EducationSystem', redirectTo: 'EducationSystem/0' },
	{ path: 'EducationSystem/:id', component: EducationSystemIndexUI, canActivate: [AuthGuard], data: { title: 'EducationSystem' }  },
	{ path: 'ExcemptionType', redirectTo: 'ExcemptionType/0' },
	{ path: 'ExcemptionType/:id', component: ExcemptionTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ExcemptionType' }  },
	{ path: 'FieldCategory', redirectTo: 'FieldCategory/0' },
	{ path: 'FieldCategory/:id', component: FieldCategoryIndexUI, canActivate: [AuthGuard], data: { title: 'FieldCategory' }  },
	{ path: 'FieldOfStudy', redirectTo: 'FieldOfStudy/0' },
	{ path: 'FieldOfStudy/:id', component: FieldOfStudyIndexUI, canActivate: [AuthGuard], data: { title: 'FieldOfStudy' }  },
	{ path: 'Gender', redirectTo: 'Gender/0' },
	{ path: 'Gender/:id', component: GenderIndexUI, canActivate: [AuthGuard], data: { title: 'Gender' }  },
	{ path: 'HabitancyType', redirectTo: 'HabitancyType/0' },
	{ path: 'HabitancyType/:id', component: HabitancyTypeIndexUI, canActivate: [AuthGuard], data: { title: 'HabitancyType' }  },
	{ path: 'HealthStatus', redirectTo: 'HealthStatus/0' },
	{ path: 'HealthStatus/:id', component: HealthStatusIndexUI, canActivate: [AuthGuard], data: { title: 'HealthStatus' }  },
	{ path: 'HoldingSection', redirectTo: 'HoldingSection/0' },
	{ path: 'HoldingSection/:id', component: HoldingSectionIndexUI, canActivate: [AuthGuard], data: { title: 'HoldingSection' }  },
	{ path: 'InclusiveType', redirectTo: 'InclusiveType/0' },
	{ path: 'InclusiveType/:id', component: InclusiveTypeIndexUI, canActivate: [AuthGuard], data: { title: 'InclusiveType' }  },
	{ path: 'Language', redirectTo: 'Language/0' },
	{ path: 'Language/:id', component: LanguageIndexUI, canActivate: [AuthGuard], data: { title: 'Language' }  },
	{ path: 'MilitaryServiceStatus', redirectTo: 'MilitaryServiceStatus/0' },
	{ path: 'MilitaryServiceStatus/:id', component: MilitaryServiceStatusIndexUI, canActivate: [AuthGuard], data: { title: 'MilitaryServiceStatus' }  },
	{ path: 'Province', redirectTo: 'Province/0' },
	{ path: 'Province/:id', component: ProvinceIndexUI, canActivate: [AuthGuard], data: { title: 'Province' }  },
	{ path: 'Quarter', redirectTo: 'Quarter/0' },
	{ path: 'Quarter/:id', component: QuarterIndexUI, canActivate: [AuthGuard], data: { title: 'Quarter' }  },
	{ path: 'Religion', redirectTo: 'Religion/0' },
	{ path: 'Religion/:id', component: ReligionIndexUI, canActivate: [AuthGuard], data: { title: 'Religion' }  },
	{ path: 'SchoolLevel', redirectTo: 'SchoolLevel/0' },
	{ path: 'SchoolLevel/:id', component: SchoolLevelIndexUI, canActivate: [AuthGuard], data: { title: 'SchoolLevel' }  },
	{ path: 'University', redirectTo: 'University/0' },
	{ path: 'University/:id', component: UniversityIndexUI, canActivate: [AuthGuard], data: { title: 'University' }  },
	{ path: 'UniversityDegree', redirectTo: 'UniversityDegree/0' },
	{ path: 'UniversityDegree/:id', component: UniversityDegreeIndexUI, canActivate: [AuthGuard], data: { title: 'UniversityDegree' }  },
	{ path: 'UniversityFieldCategory', redirectTo: 'UniversityFieldCategory/0' },
	{ path: 'UniversityFieldCategory/:id', component: UniversityFieldCategoryIndexUI, canActivate: [AuthGuard], data: { title: 'UniversityFieldCategory' }  },
	{ path: 'Year', redirectTo: 'Year/0' },
	{ path: 'Year/:id', component: YearIndexUI, canActivate: [AuthGuard], data: { title: 'Year' }  },
	{ path: 'YearQuarter', redirectTo: 'YearQuarter/0' },
	{ path: 'YearQuarter/:id', component: YearQuarterIndexUI, canActivate: [AuthGuard], data: { title: 'YearQuarter' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(base_routes)
  ],
  exports: [RouterModule]
})

export class Base_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'Base', loadChildren: () => import('./Entities/Base/base.module').then(x => x.Base_Module) }