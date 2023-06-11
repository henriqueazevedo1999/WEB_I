import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './view/album/album.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { PhotoComponent } from './view/photo/photo.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
