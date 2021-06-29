import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { GuideComponent } from "./guide.component";


@NgModule({
    declarations: [
        GuideComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    exports: [
        GuideComponent,
        FormsModule,
        CommonModule,
    ]
})

export class GuideModule { }