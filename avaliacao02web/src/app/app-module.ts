import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FuncionariosPage } from './pages/funcionarios/funcionarios';
import { HomePage } from './pages/home/home';
import { provideHttpClient } from '@angular/common/http';
import { ConteudoHome } from './components/conteudo-home/conteudo-home';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    FuncionariosPage,
    HomePage,
    ConteudoHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
