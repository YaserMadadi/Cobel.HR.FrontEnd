import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { MessageIndexUI } from './Message/index/message.index';
import { SynonymIndexUI } from './Synonym/index/synonym.index';

const xcode_routes : Routes = [
  { path: 'Message', redirectTo: 'Message/0' },
	{ path: 'Message/:id', component: MessageIndexUI, canActivate: [AuthGuard], data: { title: 'Message' }  },
	{ path: 'Synonym', redirectTo: 'Synonym/0' },
	{ path: 'Synonym/:id', component: SynonymIndexUI, canActivate: [AuthGuard], data: { title: 'Synonym' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(xcode_routes)
  ],
  exports: [RouterModule]
})

export class XCode_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'XCode', loadChildren: () => import('./Entities/XCode/xcode.module').then(x => x.XCode_Module) }