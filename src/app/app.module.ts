import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './pages/portfolio/notfound/notfound.component';
import { PortafoliomainComponent } from './templates/portafoliomain/portafoliomain.component';
import { PortafolioauthComponent } from './templates/portafolioauth/portafolioauth.component';
import { PortafoliodashComponent } from './templates/portafoliodash/portafoliodash.component';

import { AuthModule } from './modules/auth/auth.module';
import { MainModule } from './modules/main/main.module';
import { PortafolioModule } from './modules/portafolio/portafolio.module';
import { PortafoliogeneralComponent } from './templates/portafoliogeneral/portafoliogeneral.component';

@NgModule({
  declarations: [
    NotfoundComponent,
    PortafoliomainComponent,
    PortafolioauthComponent,
    PortafoliodashComponent,
    PortafoliogeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    PortafolioModule,
  ],
  providers: [],
  bootstrap: [PortafoliogeneralComponent]
})
export class AppModule { }
