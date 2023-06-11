import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private pHTTP: HttpClient) { }

  findAllPhotos():Observable<Photo[]> {
    return this.pHTTP.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
