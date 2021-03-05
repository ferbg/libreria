import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

//  Modules
import { AppRoutingModule } from './app-routing.module';

//  Services
import { LibrosclickedService } from './librosclicked.service';

//  Components
import { AppComponent }      from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent }   from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LibrosclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
