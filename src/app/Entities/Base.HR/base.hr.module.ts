import {NgModule} from '@angular/core';

import { ContractTypeModule } from './ContractType/contractType.module';
import { DevelopmentPlanTypeModule } from './DevelopmentPlanType/developmentPlanType.module';
import { EmploymentStatusModule } from './EmploymentStatus/employmentStatus.module';
import { EventTypeModule } from './EventType/eventType.module';
import { MaritalStatusModule } from './MaritalStatus/maritalStatus.module';
import { RelativeTypeModule } from './RelativeType/relativeType.module';
import { Base_HR_RouteModule } from './base.hr.route.module';

@NgModule({
  declarations: [],
  imports: [
    ContractTypeModule,
		DevelopmentPlanTypeModule,
		EmploymentStatusModule,
		EventTypeModule,
		MaritalStatusModule,
		RelativeTypeModule,
		Base_HR_RouteModule
  ],
  exports: [
    ContractTypeModule,
		DevelopmentPlanTypeModule,
		EmploymentStatusModule,
		EventTypeModule,
		MaritalStatusModule,
		RelativeTypeModule,
		Base_HR_RouteModule
  ]
})
export class Base_HR_Module { }