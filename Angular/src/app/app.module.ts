import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { AlbumComponent } from './view/album/album.component';
import { PhotoComponent } from './view/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    HomePageComponent,
    CadastroComponent,
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
