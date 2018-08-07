import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransTaskPipe } from './shared/trans-task.pipe';
import { TranscharPipe } from './shared/transchar.pipe';
import { HttpService } from './services/http.service';
import { RouterModule, Routes } from '@angular/router';
import { UncheckedDirective } from './shared/unchecked.directive';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UsersService } from './services/users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './shared/filter.pipe';
import { LoginService } from './services/login.service';
import { AuthguardGuard } from './authguard.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';



const appRouter: Routes = [
 { path: 'login-form', canActivate: [AuthguardGuard] ,  component: LoginFormComponent},
 { path: 'add-task', canActivate: [AuthguardGuard] ,  component: AddTaskComponent},
 { path: 'menu', canActivate: [AuthguardGuard] ,  component: MenuComponent},
 { path: 'to-do-task', canActivate: [AuthguardGuard] , component: ToDoTaskComponent},
 { path: 'adduser', canActivate: [AuthguardGuard] , component: AdduserComponent},
 { path: 'done-task', canActivate: [AuthguardGuard] , component: DoneTaskComponent},
 { path: 'listuser', canActivate: [AuthguardGuard] , component: ListuserComponent},
 { path: '', redirectTo : '/' , pathMatch: 'full'},
 { path: '**', redirectTo : '/' , pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransTaskPipe,
    TranscharPipe,
    UncheckedDirective,
    AdduserComponent,
    ListuserComponent,
    FilterPipe,
    LoginFormComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter),
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [TasksService, HttpService, UsersService, LoginService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
