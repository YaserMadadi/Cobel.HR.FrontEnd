import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    exports: [
        ModalComponent,
        FormsModule,
        CommonModule,
    ]
})

export class XModalModule { }