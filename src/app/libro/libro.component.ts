import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosclickedService } from '../librosclicked.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  libro:any;

  constructor( private route: ActivatedRoute, private librosclickedService : LibrosclickedService ) {
  }

  ngOnInit(): void {
    this.librosclickedService.getLibros().subscribe(
      (data : Response ) => {
        const libros : any = data;
        this.route.params.subscribe(params => {
          this.libro = libros.filter( libro => libro.id === params['id'])[0];
          this.librosclickedService.visto(this.libro);
        });
      },
      (response: Response ) => { console.log("response", response )}
    )
  }
}
