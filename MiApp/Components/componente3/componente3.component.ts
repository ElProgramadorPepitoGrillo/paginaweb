import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(public nav:Router) { }

  ngOnInit(): void {    
  }
  navegacion(){    
    this.nav.navigate([''])
  }

}
