import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MissionComponent } from './mission/mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { ProfItemComponent } from './professeurs/prof-item/prof-item.component';
import { EditProfComponent } from './professeurs/edit-prof/edit-prof.component';
import { AddProfComponent } from './professeurs/add-prof/add-prof.component';
import { EditMissionComponent } from './mission/edit-mission/edit-mission.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MissionComponent,
    NavbarComponent,
    ProfesseursComponent,
    ProfItemComponent,
    EditProfComponent,
    AddProfComponent,
    EditMissionComponent,
    UsersComponent,
    UserItemComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
