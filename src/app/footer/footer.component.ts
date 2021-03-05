import { Component, OnInit } from '@angular/core';
import { LibrosclickedService } from '../librosclicked.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  libros:Array<any>;
  constructor( private librosclickedService : LibrosclickedService) { }

  ngOnInit(): void {
    this.libros = this.librosclickedService.getClicked();
  }

}
