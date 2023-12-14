import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Status } from './enums/status.enum';

const routes: Routes = [
  { path: 'todo', data: { type: Status.TODO }, loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'doing', data: { type: Status.DOING }, loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'done', data: { type: Status.DONE }, loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
