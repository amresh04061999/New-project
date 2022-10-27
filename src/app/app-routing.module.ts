import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
{
 path:'',
 pathMatch:'full',
 redirectTo:'login',
},
{
  path:'login',component:LoginFormComponent,
},
{
  path:'register',component:RegistrationComponent
},
{
  path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard]
},
{
  path:'forgot-password',component:ForgotPasswordComponent
},
{
  path:'artist',component:ArtistComponent,canActivate:[AuthGuard]
},
{
  path:'studio',component:StudioComponent,canActivate:[AuthGuard]
},
{
  path:'**',component:PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
