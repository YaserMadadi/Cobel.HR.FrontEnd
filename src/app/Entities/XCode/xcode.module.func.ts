import { NgModule } from '@angular/core';

import { Message_ModuleFunc } from './Message/message.module.func';
import { Synonym_ModuleFunc } from './Synonym/synonym.module.func';


@NgModule({
  declarations: [],
  imports: [
    Message_ModuleFunc,
		Synonym_ModuleFunc,
		
  ],
  exports: [
    Message_ModuleFunc,
		Synonym_ModuleFunc,
		
  ]
})
export class XCode_ModuleFunc { }