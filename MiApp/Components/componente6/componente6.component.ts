import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component implements OnInit {

  constructor(public nav:Router) { }

  ngOnInit(): void {
  }
  navegacion(){
    this.nav.navigate([''])
  }

}
