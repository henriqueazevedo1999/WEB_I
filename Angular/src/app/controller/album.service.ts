import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '.././model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private pHTTP: HttpClient) { }

  findAllAlbums(): Observable<Album[]> {
    return this.pHTTP.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  findAlbumById(pId: number): Observable<Album> {
    return this.pHTTP.get<Album>(`https://jsonplaceholder.typicode.com/albums/${pId}`);
  }

  insAlbum(pAlbum: Album): Observable<Album> {
    return this.pHTTP.post<Album>(
      'https://jsonplaceholder.typicode.com/albums',
      pAlbum
    );
  }

  updAlbum(pAlbum: Album): Observable<Album> {
    return this.pHTTP.put<Album>(
      `https://jsonplaceholder.typicode.com/albums/${pAlbum.id}`,
      pAlbum
    );
  }

  delAlbum(pId: number): Observable<void> {
    return this.pHTTP.delete<void>(
      `https://jsonplaceholder.typicode.com/albums/${pId}`
    );
  }
}
