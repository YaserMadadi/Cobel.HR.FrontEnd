import { CommonModule } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropDownComponent } from './tools/ui/components/dropDownMenu/dropdownMenu.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from "@angular/core";
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BiToStringPipe } from './tools/ui/pipes/bi-to-string.pipe';
import { BitToHasPipe } from './tools/ui/pipes/bit-to-has.pipe';
import { BitToActivePipe } from './tools/ui/pipes/bit-to-active.pipe';
import { ShortPipe } from './tools/ui/pipes/short.pipe';
import { ActionToWordPipe } from './tools/ui/pipes/action-to-word.pipe';
import { PrintComponent } from './tools/ui/print/print.component';
import { SSRSReportViewerModule } from './tools/ui/components/report/reportviewer/ssr.reportviewer.module';
import { BitToXPipe } from './tools/ui/pipes/bit-to-x.pipe';

// import { XModalModule } from './tools/ui/components/modal/modal.module';
import { BitToBlockPipe } from './tools/ui/pipes/bit-to-block.pipe';
import { MatMenuModule } from '@angular/material/menu';
// import { LogViewerComponent } from './ui/log-viewer/log-viewer.component';
// import { LogViewerModule } from './tools/ui/log-viewer/logViewer.Module';
// import { EntityComparatorComponent } from './ui/log-viewer/entity-comparator/entity-comparator.component';
import { IsZeroPipe } from './tools/ui/pipes/is-zero.pipe';
import { PaginatorComponent } from './tools/ui/components/paginator/paginator.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NumberPipe } from './tools/ui/pipes/number.pipe';
import { XModalModule } from './tools/ui/components/modal/modal.module';
import { GuideModule } from './tools/ui/components/guide/guide.module';
import { CdatePipe } from './tools/ui/pipes/cdate.pipe';

@NgModule({
    declarations: [
        DropDownComponent,
        BiToStringPipe,
        BitToHasPipe,
        BitToActivePipe,
        BitToXPipe,
        ShortPipe,
        ActionToWordPipe,
        PrintComponent,
        //SingleFileUploaderComponent,
        PaginatorComponent,
        BitToBlockPipe,
        IsZeroPipe,
        NumberPipe,
        CdatePipe,
        
    ],
    imports: [
        //BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        CommonModule,
        SSRSReportViewerModule,
        DropDownsModule,
        XModalModule,
        MatMenuModule,
        NgxJsonViewerModule,
        InputsModule,
        //FileUploaderModule,
        TabsModule.forRoot(),
        //BrowserModule,
        BsDropdownModule.forRoot(),
        //DpDatePickerModule,
        GuideModule,
    ],
    exports: [

        RouterModule,
        FormsModule,
        CommonModule,
        DropDownsModule,
        InputsModule,
        MatMenuModule,
        NgxJsonViewerModule,
        //BrowserAnimationsModule,
        TabsModule,
        DropDownComponent,
        BsDropdownModule,
        BitToHasPipe,
        BitToActivePipe,
        BitToXPipe,
        BitToBlockPipe,
        ShortPipe,
        CdatePipe,
        //FileUploaderModule,
        //FileViewerComponent,
        SSRSReportViewerModule,
        //ReportViewerComponent,
        //SingleFileUploaderComponent,
        //DpDatePickerModule,
        PaginatorComponent,
        XModalModule,
        IsZeroPipe,
        NumberPipe,
        GuideModule,
        
    ]
})
export class XCommonModule { }