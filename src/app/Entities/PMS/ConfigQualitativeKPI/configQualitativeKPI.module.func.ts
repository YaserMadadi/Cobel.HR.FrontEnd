import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConfigQualitativeKPIService } from './configQualitativeKPI.service';
import { ConfigQualitativeKPIServiceCollection } from './configQualitativeKPI.service.collection';
import { ConfigQualitativeKPIMasterUI } from './master/configQualitativeKPI.master';
import { ConfigQualitativeKPIEditUI } from './edit/configQualitativeKPI.edit';
import { ConfigQualitativeKPIDeleteUI } from './delete/configQualitativeKPI.delete';
import { ConfigQualitativeKPISeekUI } from './seek/configQualitativeKPI.seek';

import { ConfigQualitativeObjective_ModuleFunc } from '../ConfigQualitativeObjective/configQualitativeObjective.module.func';

@NgModule({
    declarations: [
        ConfigQualitativeKPIEditUI,
		ConfigQualitativeKPIDeleteUI,
		ConfigQualitativeKPISeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        ConfigQualitativeObjective_ModuleFunc
    ],
    exports: [
        ConfigQualitativeKPIEditUI,
		ConfigQualitativeKPIDeleteUI,
		ConfigQualitativeKPISeekUI
    ]
})

export class ConfigQualitativeKPI_ModuleFunc { }