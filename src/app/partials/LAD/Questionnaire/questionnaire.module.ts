import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'xcore/shared/shared.module';
import { XModalModule } from 'xcore/tools/ui/components/modal/modal.module';
import { CoachingQuestionnaireComponent } from './coaching-questionnaire/coaching-questionnaire.component';
import { RunQuestionnaireComponent } from './run-questionnaire/run-questionnaire.component';


@NgModule({
  declarations: [
    CoachingQuestionnaireComponent,
    RunQuestionnaireComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    XModalModule,
    SharedModule,
  ],
  exports: [
    CoachingQuestionnaireComponent,
    RunQuestionnaireComponent,
  ]
})
export class LAD_Questionnaire_Module { }