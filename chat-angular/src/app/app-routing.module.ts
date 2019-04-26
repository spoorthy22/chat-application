import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { GroupsComponent } from './groups/groups.component';
import { MessageComponent } from './message/message.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login'},
//    { path: 'login', component: LoginComponent },
//    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
// //    { path: 'allusers', component: UserComponent, canActivate: [AuthGuard] },
// //    { path: 'allgroups', component: GroupsComponent, canActivate: [AuthGuard] },
// //    { path: 'allmessages', component: MessageComponent, canActivate: [AuthGuard] },
// ];

const routes: Routes = [
  {
    path: 'admin',                       // {1}
    component: AdminComponent,
    canActivate: [AuthGuard],       // {2}
    children: [
      // { path: 'admin', component: AdminComponent },
      { path: 'allusers', component: UserComponent },
      { path: 'allgroups', component: GroupsComponent },
      { path: 'allmessages', component: MessageComponent },
    ]
  },
  {
    path: '',
    component: LoginComponent, // {4}
    children: [
      {
        path: 'login',
        component: LoginComponent   // {5}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
