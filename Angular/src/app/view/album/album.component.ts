import { Component } from '@angular/core';
import { AlbumService } from 'src/app/controller/album.service';
import { Album } from 'src/app/model/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  vetAlbums: Album[] = [];
  vId: number = 0;
  vAlbum: Album = {
    id: 0,
    userId: 0,
    title: ""
  };

  vAlbum2: Album = {
    id: 0,
    userId: 0,
    title: ""
  }

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.albumService.findAllAlbums().subscribe(
      (pAlbums) => this.vetAlbums = pAlbums
    );
  }

  encontraAlbum(): void {
    this.albumService.findAlbumById(this.vId).subscribe(
      (pAlbum) => {
        this.vAlbum = pAlbum;
        this.vAlbum2.id = pAlbum.id;
      }
    );
  }

  insereAlbum(): void {
    this.albumService.insAlbum(this.vAlbum2).subscribe(
      (pAlbum) => this.vAlbum = pAlbum
    );
  }

  alteraAlbum(): void {
    this.albumService.updAlbum(this.vAlbum2).subscribe(
      (pAlbum) => this.vAlbum = pAlbum
    );
  }

  apagaAlbum(): void {
    this.albumService.delAlbum(this.vId).subscribe(
      () => console.log('Excluído com sucesso!')
    );
  }
}
