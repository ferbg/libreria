import { Component, OnInit } from '@angular/core';
import { LibrosclickedService } from '../librosclicked.service';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros:any;

  constructor(private httpClient : HttpClient, private librosClickedService : LibrosclickedService) {
  }

  ngOnInit(): void {
    this.cargarListado();
  }

  private cargarListado() {
    this.librosClickedService.getLibros().subscribe(
      (data : Response ) => { this.libros = data; },
      (response: Response ) => { console.log("response", response )}
    )
  }

}
