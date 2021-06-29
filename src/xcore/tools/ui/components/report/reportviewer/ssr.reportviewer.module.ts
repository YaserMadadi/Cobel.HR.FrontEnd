import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSRReportViewerComponent } from './ssr.reportviewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SSRReportViewerComponent
  ],
  exports: [
    SSRReportViewerComponent
  ]
})
export class SSRSReportViewerModule { }
