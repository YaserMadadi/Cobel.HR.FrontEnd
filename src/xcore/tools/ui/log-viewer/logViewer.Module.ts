import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// import { LogViewerComponent } from "./log-viewer.component";
import { ModalComponent } from "../components/modal/modal.component";
import { XCommonModule } from "../../../xcommon.module";
import { XModalModule } from "../components/modal/modal.module";
import { BusinessObject } from "../../../business-object";
import { SharedModule } from "../../../shared/shared.module";
// import { LogServiceExt } from "./log.service";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { LogViewerComponent } from "./log-viewer.component";
// import { LogViewerComponent } from "./log-viewer.component";
// import { EntityComparatorComponent } from "./entity-comparator/entity-comparator.component";
//import { EntityComparatorComponent } from "./entity-comparator/entity-comparator.component";


@NgModule({
    declarations: [
        LogViewerComponent,
        // EntityComparatorComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        //XModalModule,
        NgxJsonViewerModule,
        XCommonModule,
    ],
    exports: [
        LogViewerComponent,
        NgxJsonViewerModule,
        XCommonModule
        // EntityComparatorComponent
    ]
})
export class LogViewerModule { }