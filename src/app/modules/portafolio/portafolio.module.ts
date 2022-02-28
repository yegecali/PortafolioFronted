import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { InicioComponent } from 'src/app/pages/portfolio/inicio/inicio.component';
import { PortafolioComponent } from 'src/app/pages/portfolio/portafolio/portafolio.component';
import { ContactoComponent } from 'src/app/pages/portfolio/contacto/contacto.component';
import { AcercademiComponent } from 'src/app/pages/portfolio/acercademi/acercademi.component';
import { ServiciosComponent } from 'src/app/pages/portfolio/servicios/servicios.component';
import { BlogComponent } from 'src/app/pages/portfolio/blog/blog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PortafolioComponent,
    ContactoComponent,
    AcercademiComponent,
    ServiciosComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
