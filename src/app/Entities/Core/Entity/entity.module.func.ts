import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EntityService } from './entity.service';
import { EntityServiceCollection } from './entity.service.collection';
import { EntityMasterUI } from './master/entity.master';
import { EntityEditUI } from './edit/entity.edit';
import { EntityDeleteUI } from './delete/entity.delete';
import { EntitySeekUI } from './seek/entity.seek';


@NgModule({
    declarations: [
        EntityEditUI,
		EntityDeleteUI,
		EntitySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        EntityEditUI,
		EntityDeleteUI,
		EntitySeekUI
    ]
})

export class Entity_ModuleFunc { }