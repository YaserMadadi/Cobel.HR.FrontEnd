import { NgModule } from "@angular/core";
import { ShareFunctionalModule } from "../../app/Entities/share.functional.module";
// import { LogViewerModule } from "../tools/ui/log-viewer/logViewer.Module";
import { XCommonModule } from '../xcommon.module';


@NgModule({
  declarations: [],
  imports: [
    ShareFunctionalModule,
    XCommonModule,
  ],
  exports: [
    ShareFunctionalModule,
    XCommonModule,
  ]
})
export class SharedModule {
}
