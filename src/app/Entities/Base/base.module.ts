import {NgModule} from '@angular/core';

import { CertificationTypeModule } from './CertificationType/certificationType.module';
import { CityModule } from './City/city.module';
import { ConnectionTypeModule } from './ConnectionType/connectionType.module';
import { CountryModule } from './Country/country.module';
import { DrivingLicenseTypeModule } from './DrivingLicenseType/drivingLicenseType.module';
import { EducationSystemModule } from './EducationSystem/educationSystem.module';
import { ExcemptionTypeModule } from './ExcemptionType/excemptionType.module';
import { FieldCategoryModule } from './FieldCategory/fieldCategory.module';
import { FieldOfStudyModule } from './FieldOfStudy/fieldOfStudy.module';
import { GenderModule } from './Gender/gender.module';
import { HabitancyTypeModule } from './HabitancyType/habitancyType.module';
import { HealthStatusModule } from './HealthStatus/healthStatus.module';
import { HoldingSectionModule } from './HoldingSection/holdingSection.module';
import { InclusiveTypeModule } from './InclusiveType/inclusiveType.module';
import { LanguageModule } from './Language/language.module';
import { MilitaryServiceStatusModule } from './MilitaryServiceStatus/militaryServiceStatus.module';
import { ProvinceModule } from './Province/province.module';
import { QuarterModule } from './Quarter/quarter.module';
import { ReligionModule } from './Religion/religion.module';
import { SchoolLevelModule } from './SchoolLevel/schoolLevel.module';
import { UniversityModule } from './University/university.module';
import { UniversityDegreeModule } from './UniversityDegree/universityDegree.module';
import { UniversityFieldCategoryModule } from './UniversityFieldCategory/universityFieldCategory.module';
import { YearModule } from './Year/year.module';
import { YearQuarterModule } from './YearQuarter/yearQuarter.module';
import { Base_RouteModule } from './base.route.module';

@NgModule({
  declarations: [],
  imports: [
    CertificationTypeModule,
		CityModule,
		ConnectionTypeModule,
		CountryModule,
		DrivingLicenseTypeModule,
		EducationSystemModule,
		ExcemptionTypeModule,
		FieldCategoryModule,
		FieldOfStudyModule,
		GenderModule,
		HabitancyTypeModule,
		HealthStatusModule,
		HoldingSectionModule,
		InclusiveTypeModule,
		LanguageModule,
		MilitaryServiceStatusModule,
		ProvinceModule,
		QuarterModule,
		ReligionModule,
		SchoolLevelModule,
		UniversityModule,
		UniversityDegreeModule,
		UniversityFieldCategoryModule,
		YearModule,
		YearQuarterModule,
		Base_RouteModule
  ],
  exports: [
    CertificationTypeModule,
		CityModule,
		ConnectionTypeModule,
		CountryModule,
		DrivingLicenseTypeModule,
		EducationSystemModule,
		ExcemptionTypeModule,
		FieldCategoryModule,
		FieldOfStudyModule,
		GenderModule,
		HabitancyTypeModule,
		HealthStatusModule,
		HoldingSectionModule,
		InclusiveTypeModule,
		LanguageModule,
		MilitaryServiceStatusModule,
		ProvinceModule,
		QuarterModule,
		ReligionModule,
		SchoolLevelModule,
		UniversityModule,
		UniversityDegreeModule,
		UniversityFieldCategoryModule,
		YearModule,
		YearQuarterModule,
		Base_RouteModule
  ]
})
export class Base_Module { }