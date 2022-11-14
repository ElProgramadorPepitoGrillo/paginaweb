import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {

  }
  navegacion(){
    this.nav.navigate(['web2'])
  }
  
  navegacion2(){
    this.nav.navigate(['web3'])
  }
  navegacion3(){
    this.nav.navigate(['web4'])
  }
  navegacion4(){
    this.nav.navigate(['web5'])
  }
  navegacion5(){
    this.nav.navigate(['web6'])
  }

}
