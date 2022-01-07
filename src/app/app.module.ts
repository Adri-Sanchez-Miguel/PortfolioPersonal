import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { Elements } from './components/elements/elements.component';
import { Ficha } from './components/ficha/ficha.component';
import { Formacion } from './components/formacion/formacion.component';
import { Conocimientos } from './components/conocimientos/conocimientos.component';
import { Main } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Elements,
    Ficha,
    Conocimientos,
    Formacion,
    Main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
