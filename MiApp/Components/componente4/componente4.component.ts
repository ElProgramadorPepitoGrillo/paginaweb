import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor(public nav:Router) { }

  ngOnInit(): void {
  }
  navegacion(){    
    this.nav.navigate([''])
  }


}
