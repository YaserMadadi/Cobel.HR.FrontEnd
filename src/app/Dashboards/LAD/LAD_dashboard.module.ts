import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from 'src/xcore/shared/shared.module';
import { XModalModule } from 'src/xcore/tools/ui/components/modal/modal.module';
import { XCommonModule } from 'src/xcore/xcommon.module';
import { ActionPlanComponent } from './action-plan/action-plan.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PromotionComponent } from './assessment/promotion/promotion.component';
import { RotationComponent } from './assessment/rotation/rotation.component';
import { CoachingComponent } from './coaching/coaching.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { LADIndexComponent } from './index/index.component';
import { LAD_DashboardRouteModule } from './LAD_dashboard.route.module';
import { TrainingComponent } from './training/training.component';
// import { ModalModule } from '../../xcore/ui/components/modal/modal.module';
// import { ModalComponent } from '../../xcore/ui/components/modal/modal.component';
// import { ActionPlanComponent } from './action-plan/action-plan.component';
// import { AppraisalDashboardComponent } from './appraisal-dashboard/appraisal-dashboard.component';
// import { AssessmentResultComponent } from './assessment-result/assessment-result.component';
// import { PromotionInfoComponent } from './assessment-result/promotion-info/promotion-info.component';
// import { RotationInfoComponent } from './assessment-result/rotation-info/rotation-info.component';
// import { CoachingInformationComponent } from './coaching-information/coaching-information.component';
// import { ConclusionComponent } from './conclusion/conclusion.component';
// import { DashboardRouteModule } from './dashboard.route.module';
// import { PersonDashboardComponent } from './person-dashboard/person-dashboard.component';
// import { TrainingHistoryComponent } from './training-history/training-history.component';
// import { XCommonModule } from '../../xcore/xcommon.module';


@NgModule({
    declarations: [
        LADIndexComponent,
        AppraisalComponent,
        PromotionComponent,
        RotationComponent,
        AssessmentComponent,
        CoachingComponent,
        ConclusionComponent,
        TrainingComponent,
        ActionPlanComponent,
    ],
    imports: [
        LAD_DashboardRouteModule,
        CommonModule,
        ChartsModule,
        TabsModule,
        XModalModule,
        SharedModule
    ],
    exports: [
        LAD_DashboardRouteModule,
        LADIndexComponent
    ]
})
export class DashboardModule { }