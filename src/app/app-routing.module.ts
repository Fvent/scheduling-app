import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LongtermPageComponent } from '../app/pages/longterm-page/longterm-page.component'
import { SchedulingPageComponent } from '../app/pages/scheduling-page/scheduling-page.component';
import { TodosPageComponent } from '../app/pages/todos-page/todos-page.component';
import { CompletedPageComponent } from '../app/pages/completed-page/completed-page.component';
import { BacklogPageComponent } from '../app/pages/backlog-page/backlog-page.component';

const routes: Routes = [
  {path:'*', component: LongtermPageComponent},
  {path:'longterm-page', component: LongtermPageComponent},
  {path:'scheduling-page', component: SchedulingPageComponent},
  {path:'todos-page', component: TodosPageComponent},
  {path:'completed-page', component: CompletedPageComponent},
  {path:'backlog-page', component: BacklogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
