import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ObjectiveWeightNonOperationalService } from './objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalServiceCollection } from './objectiveWeightNonOperational.service.collection';

import { ObjectiveWeightNonOperationalIndexUI } from './index/objectiveWeightNonOperational.index';
import { ObjectiveWeightNonOperational_ModuleFunc } from './objectiveWeightNonOperational.module.func';
import { ObjectiveWeightNonOperational_ModuleMaster } from './objectiveWeightNonOperational.module.master';



@NgModule({
  declarations: [
    ObjectiveWeightNonOperationalIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ObjectiveWeightNonOperational_ModuleMaster,
  ],
  exports: [
    ObjectiveWeightNonOperationalIndexUI,
		ObjectiveWeightNonOperational_ModuleMaster,
   ]
})
export class ObjectiveWeightNonOperationalModule {}