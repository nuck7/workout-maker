import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

import { MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LogoComponent } from './logo/logo.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    LogoComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
