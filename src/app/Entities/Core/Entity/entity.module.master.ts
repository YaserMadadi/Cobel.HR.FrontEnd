import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EntityService } from './entity.service';
import { EntityServiceCollection } from './entity.service.collection';
import { EntityMasterUI } from './master/entity.master';
import { Entity_ModuleDetail } from './entity.module.detail';

@NgModule({
    declarations: [
        EntityMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Entity_ModuleDetail
    ],
    exports: [
        EntityMasterUI
    ],
    providers: [
        //EntityService,
       // EntityServiceCollection   
    ]
})

export class Entity_ModuleMaster { }