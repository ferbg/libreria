import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LibroComponent }         from './libro/libro.component';
import { LibrosComponent }        from './libros/libros.component';
import { InicioComponent }        from './inicio/inicio.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { Error404Component }      from './error404/error404.component';
import { LoaderComponent } from './loader/loader.component';

const routes = [
  { path : "libros/:id", component: LibroComponent },
  { path : "libros", component: LibrosComponent },
  { path : "about", component: SobrenosotrosComponent },
  { path : "error404", component: Error404Component },
  { path : "", component: InicioComponent, pathMatch: "full" },
  { path : "**", redirectTo: "/error404" },
];

@NgModule({
  declarations: [
    InicioComponent,
    LibroComponent,
    LibrosComponent,
    Error404Component,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
