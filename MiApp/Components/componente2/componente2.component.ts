import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(public nav:Router) { }

  ngOnInit(): void {
  }
  
  navegacion(){
    this.nav.navigate([''])
  }

}
