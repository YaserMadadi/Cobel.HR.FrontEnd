import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../xcore/security/auth_service';
import { SharedModule } from '../../xcore/shared/shared.module';
import { AuthCoreRouteModule } from './auth.route.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AuthCoreRouteModule
  ],
  exports: [
    LoginComponent
  ],
  providers:[
    AuthService
  ]
})
export class AuthCoreModule { }