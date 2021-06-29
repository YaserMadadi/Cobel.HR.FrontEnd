import { NgModule } from '@angular/core';

import { ContractType_ModuleFunc } from './ContractType/contractType.module.func';
import { DevelopmentPlanType_ModuleFunc } from './DevelopmentPlanType/developmentPlanType.module.func';
import { EmploymentStatus_ModuleFunc } from './EmploymentStatus/employmentStatus.module.func';
import { EventType_ModuleFunc } from './EventType/eventType.module.func';
import { MaritalStatus_ModuleFunc } from './MaritalStatus/maritalStatus.module.func';
import { RelativeType_ModuleFunc } from './RelativeType/relativeType.module.func';


@NgModule({
  declarations: [],
  imports: [
    ContractType_ModuleFunc,
		DevelopmentPlanType_ModuleFunc,
		EmploymentStatus_ModuleFunc,
		EventType_ModuleFunc,
		MaritalStatus_ModuleFunc,
		RelativeType_ModuleFunc,
		
  ],
  exports: [
    ContractType_ModuleFunc,
		DevelopmentPlanType_ModuleFunc,
		EmploymentStatus_ModuleFunc,
		EventType_ModuleFunc,
		MaritalStatus_ModuleFunc,
		RelativeType_ModuleFunc,
		
  ]
})
export class Base_HR_ModuleFunc { }