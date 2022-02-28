import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/portfolio/notfound/notfound.component';
import { PortafolioauthComponent } from './templates/portafolioauth/portafolioauth.component';
import { PortafoliodashComponent } from './templates/portafoliodash/portafoliodash.component';
import { PortafoliomainComponent } from './templates/portafoliomain/portafoliomain.component';

const routes: Routes = [
  {path: "", component: PortafoliomainComponent, loadChildren: ()=>import("./modules/portafolio/portafolio.module").then(m => m.PortafolioModule)},
  {path: "auth", component: PortafolioauthComponent, loadChildren: ()=>import("./modules/auth/auth.module").then(m => m.AuthModule)},
  {path: "dashboard", component: PortafoliodashComponent, loadChildren: ()=>import("./modules/main/main.module").then(m => m.MainModule)},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
