import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/editServer/editServer.component';
import { ViewServerComponent } from './servers/viewServer/viewServer.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { UserFormComponent } from './UserForm/form.component';

const appRoutes: Routes = [
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
  { path: 'userFrom', title: 'UserPage', component: UserFormComponent },
  { path: 'not-found', title: 'Error Page', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
