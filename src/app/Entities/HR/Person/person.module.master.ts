import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonService } from './person.service';
import { PersonServiceCollection } from './person.service.collection';
import { PersonMasterUI } from './master/person.master';
import { Person_ModuleDetail } from './person.module.detail';

@NgModule({
    declarations: [
        PersonMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Person_ModuleDetail
    ],
    exports: [
        PersonMasterUI
    ],
    providers: [
        //PersonService,
       // PersonServiceCollection   
    ]
})

export class Person_ModuleMaster { }