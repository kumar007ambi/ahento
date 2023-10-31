import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/editServer/editServer.component';
import { ViewServerComponent } from './servers/viewServer/viewServer.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
// import { UserFormComponent } from './UserForm/userForm.component';
// import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
// import { MyPipesComponent } from './pipes/myPipes.component';
import { PostRequestComponent } from './httpRequest/postRequest.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'users', title: 'User Page', component: UsersComponent },
  {
    path: 'server',
    title: 'Server Page',
    component: ServerComponent,
    children: [
      { path: 'server/edit', component: EditServerComponent },
      { path: 'server/view', component: ViewServerComponent },
    ],
  },
  
  { path: 'post', title: 'postRequest', component: PostRequestComponent },
  { path: 'auth', title: 'UserPage', component: AuthComponent },
  // {
  //   path: 'reactiveForm',
  //   title: 'ReactiveFormPage',
  //   component: ReactiveFormComponent,
  // },
  //{ path: 'myPipes', title: 'Pipes', component: MyPipesComponent },
  { path: 'not-found', title: 'Error Page', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
