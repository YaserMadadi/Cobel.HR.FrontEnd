import {NgModule} from '@angular/core';

import { MessageModule } from './Message/message.module';
import { SynonymModule } from './Synonym/synonym.module';
import { XCode_RouteModule } from './xcode.route.module';

@NgModule({
  declarations: [],
  imports: [
    MessageModule,
		SynonymModule,
		XCode_RouteModule
  ],
  exports: [
    MessageModule,
		SynonymModule,
		XCode_RouteModule
  ]
})
export class XCode_Module { }