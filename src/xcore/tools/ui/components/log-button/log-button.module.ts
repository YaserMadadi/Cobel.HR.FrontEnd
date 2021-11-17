import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { LogButtonComponent } from "./log-button.component";
import { LogViewerModule } from "../../log-viewer/logViewer.Module";

@NgModule({
    declarations: [
        LogButtonComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        LogViewerModule
    ],
    exports: [
        LogButtonComponent,
        NgxJsonViewerModule,
    ]
})
export class LogButtonModule { }