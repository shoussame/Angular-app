import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
import { AddProfComponent } from './professeurs/add-prof/add-prof.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'missions', component: MissionComponent },
  {path: 'professeurs', component: ProfesseursComponent},
  {path: 'professeurs/add', component: AddProfComponent},
  {path: 'personnes', component: UsersComponent},
  {path: 'personnes/add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
