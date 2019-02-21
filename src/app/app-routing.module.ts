import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const routes: Routes = [
  {
    path: '',
    component: TermsOfServiceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
