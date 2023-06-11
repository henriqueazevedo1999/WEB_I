import { Component } from '@angular/core';
import { PhotoService } from 'src/app/controller/photo.service';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  vetPhotos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.photoService.findAllPhotos().subscribe(
      (pPhotos) => this.vetPhotos = pPhotos
    );
  }
}
