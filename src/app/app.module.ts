import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule} from '@angular/forms'
import { HttpClient,  httpResource, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient,
    
    
   
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
