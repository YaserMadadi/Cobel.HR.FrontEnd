import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SubSyetemMenuComponent } from './sub-syetem-menu.component';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        SubSyetemMenuComponent
    ],
    imports: [
        //BrowserAnimationsModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        FormsModule,
        CommonModule,
        DropDownsModule,
        SubSyetemMenuComponent
        
    ]
})
export class SubSystemMenuModule { }