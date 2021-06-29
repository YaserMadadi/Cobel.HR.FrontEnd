import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../xcore/security/auth_service';
import { SharedModule } from '../../xcore/shared/shared.module';
import { DashboardRouteModule } from './dashboard.module.route';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    DashboardRouteModule
  ],
  exports: [
    IndexComponent
  ],
  providers:[
  ]
})
export class AuthCoreModule { }