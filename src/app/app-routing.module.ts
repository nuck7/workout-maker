import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LogoComponent } from './logo/logo.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    pathMatch: 'full'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    pathMatch: 'full'
  },
  {
    path: 'support',
    component: SupportComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LogoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
