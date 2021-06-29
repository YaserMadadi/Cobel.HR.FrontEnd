import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { CourseIndexUI } from './Course/index/course.index';
import { TrainingIndexUI } from './Training/index/training.index';

const idea_routes : Routes = [
  { path: 'Course', redirectTo: 'Course/0' },
	{ path: 'Course/:id', component: CourseIndexUI, canActivate: [AuthGuard], data: { title: 'Course' }  },
	{ path: 'Training', redirectTo: 'Training/0' },
	{ path: 'Training/:id', component: TrainingIndexUI, canActivate: [AuthGuard], data: { title: 'Training' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(idea_routes)
  ],
  exports: [RouterModule]
})

export class IDEA_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'IDEA', loadChildren: () => import('./Entities/IDEA/idea.module').then(x => x.IDEA_Module) }