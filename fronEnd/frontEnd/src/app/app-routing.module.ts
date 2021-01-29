import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent} from './signup/signup.component'
import { AddEditUserComponent} from './add-edit-user/add-edit-user.component'
import { UserComponent } from './user/user.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path : 'editUser/:user', component: AddEditUserComponent},
  { path: 'players', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
