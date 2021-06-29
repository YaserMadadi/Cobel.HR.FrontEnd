import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PersonService } from './person.service';
import { PersonServiceCollection } from './person.service.collection';
import { PersonMasterUI } from './master/person.master';
import { PersonEditUI } from './edit/person.edit';
import { PersonDeleteUI } from './delete/person.delete';
import { PersonSeekUI } from './seek/person.seek';

import { Gender_ModuleFunc } from '../../Base/Gender/gender.module.func';
import { City_ModuleFunc } from '../../Base/City/city.module.func';
import { Religion_ModuleFunc } from '../../Base/Religion/religion.module.func';
import { HealthStatus_ModuleFunc } from '../../Base/HealthStatus/healthStatus.module.func';
import { Country_ModuleFunc } from '../../Base/Country/country.module.func';
import { MaritalStatus_ModuleFunc } from '../../Base.HR/MaritalStatus/maritalStatus.module.func';

@NgModule({
    declarations: [
        PersonEditUI,
		PersonDeleteUI,
		PersonSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Gender_ModuleFunc,
		City_ModuleFunc,
		Religion_ModuleFunc,
		HealthStatus_ModuleFunc,
		Country_ModuleFunc,
		MaritalStatus_ModuleFunc
    ],
    exports: [
        PersonEditUI,
		PersonDeleteUI,
		PersonSeekUI
    ],
    providers: [
       //PersonService,
       // PersonServiceCollection,
    ]
})

export class Person_ModuleFunc { }