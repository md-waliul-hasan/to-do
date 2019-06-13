import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {WebStorageModule} from 'ngx-store';
import { AddlistComponent } from './addlist/addlist.component';
import {RouterModule ,  Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditlistComponent } from './editlist/editlist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddlistComponent,
    HomeComponent,
    EditlistComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WebStorageModule,
        RouterModule,
        ReactiveFormsModule



    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
