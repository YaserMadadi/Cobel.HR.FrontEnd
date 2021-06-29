import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CellActionService } from './cellAction.service';
import { CellActionServiceCollection } from './cellAction.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //CellActionService,
    //CellActionServiceCollection
  ]
})
export class CellAction_ModuleDetail { }