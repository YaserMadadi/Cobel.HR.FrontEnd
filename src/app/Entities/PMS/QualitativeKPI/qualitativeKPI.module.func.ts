import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { QualitativeKPIService } from './qualitativeKPI.service';
import { QualitativeKPIServiceCollection } from './qualitativeKPI.service.collection';
import { QualitativeKPIMasterUI } from './master/qualitativeKPI.master';
import { QualitativeKPIEditUI } from './edit/qualitativeKPI.edit';
import { QualitativeKPIDeleteUI } from './delete/qualitativeKPI.delete';
import { QualitativeKPISeekUI } from './seek/qualitativeKPI.seek';

import { QualitativeObjective_ModuleFunc } from '../QualitativeObjective/qualitativeObjective.module.func';

@NgModule({
    declarations: [
        QualitativeKPIEditUI,
		QualitativeKPIDeleteUI,
		QualitativeKPISeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        QualitativeObjective_ModuleFunc
    ],
    exports: [
        QualitativeKPIEditUI,
		QualitativeKPIDeleteUI,
		QualitativeKPISeekUI
    ]
})

export class QualitativeKPI_ModuleFunc { }