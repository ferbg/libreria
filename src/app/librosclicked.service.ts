import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosclickedService {

  libros: Array<object>;
  constructor(private httpClient : HttpClient) {
    this.libros = [];
  }

  visto(libro : any) {
    this.libros.push(libro);
    console.info( "this.libros", this.libros );
  }

  /**
   * getLibros
   */
  public getLibros() : Observable<any> {
    return this.httpClient.get("assets/libros.json");
  }
}
