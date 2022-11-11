import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistritionFormComponent } from './registrition-form/registrition-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'regitration'
  },
  {
    path: 'regitration', component: RegistritionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
