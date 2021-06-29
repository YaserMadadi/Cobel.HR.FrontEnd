import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import  { Info } from '../xcore/Info';

// Import containers
import { DefaultLayoutComponent } from './layouts';

import { P404Component } from './layouts/components/error/404.component';
import { P500Component } from './layouts/components/error/500.component';
import { LoginComponent } from './layouts/components/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { API_Operation } from '../xcore/service/api.operation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../xcore/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
//import { AuthCoreModule } from './security/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermissionController } from '../xcore/tools/controller.permission';
import { NgSelectModule } from '@ng-select/ng-select';
import { XModalModule } from '../xcore/tools/ui/components/modal/modal.module';
import { AuthCoreModule } from './security/auth.module';
import { IndexComponent } from './Dashboards/index/index.component';
import { LogViewerModule } from '../xcore/tools/ui/log-viewer/logViewer.Module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SubSyetemMenuComponent } from '../xcore/tools/ui/components/sub-syetem-menu/sub-syetem-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


//import { IndexComponent } from './Dashboards/index/index.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    HttpClientModule,
    PerfectScrollbarModule,
    LogViewerModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 7000,
      progressBar: true,
      enableHtml: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    MatIconModule,
    MatMenuModule,
    //ChartsModule,
    DropDownsModule,
    InputsModule,
    SharedModule,
    XModalModule,
    AuthCoreModule,
    NgSelectModule,
    TreeViewModule,
  ],
  exports:[
    SharedModule,
    
  ],
  declarations: [
    IndexComponent,
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    
  ],
  providers: [Info,
    PermissionController,
    API_Operation,
    HttpClient,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
