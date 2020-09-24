import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DataSharingService } from "../app/services/data-sharing/data-sharing.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongtermPageComponent } from './pages/longterm-page/longterm-page.component';
import { SchedulingPageComponent } from './pages/scheduling-page/scheduling-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { CompletedPageComponent } from './pages/completed-page/completed-page.component';
import { BacklogPageComponent } from './pages/backlog-page/backlog-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LongtermPageComponent,
    SchedulingPageComponent,
    TodosPageComponent,
    CompletedPageComponent,
    BacklogPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
