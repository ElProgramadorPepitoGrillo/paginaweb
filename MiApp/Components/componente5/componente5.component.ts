import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

  constructor(public nav:Router) { }

  ngOnInit(): void {
  }
  navegacion(){    
    this.nav.navigate([''])
  }

}
