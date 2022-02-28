import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercademiComponent } from 'src/app/pages/portfolio/acercademi/acercademi.component';
import { BlogComponent } from 'src/app/pages/portfolio/blog/blog.component';
import { ContactoComponent } from 'src/app/pages/portfolio/contacto/contacto.component';
import { InicioComponent } from 'src/app/pages/portfolio/inicio/inicio.component';
import { PortafolioComponent } from 'src/app/pages/portfolio/portafolio/portafolio.component';
import { ServiciosComponent } from 'src/app/pages/portfolio/servicios/servicios.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "acerca-de-mi", component: AcercademiComponent},
  {path: "blog", component: BlogComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "portafolio", component: PortafolioComponent},
  {path: "servicios", component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
