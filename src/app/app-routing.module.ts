import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddlistComponent} from './addlist/addlist.component';
import {HomeComponent} from './home/home.component';
import {EditlistComponent} from './editlist/editlist.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit/:id', component: EditlistComponent },
    { path: 'add' , component: AddlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [AddlistComponent]
