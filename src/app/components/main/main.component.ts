import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'main',
    moduleId: module.id,
    templateUrl: 'main.component.html'
})

export class Main{
    constructor(private router: Router) {}

    gotoFicha(){
        this.router.navigate(['/ficha']);  // define your component where you want to go
    }

    gotoFormacion(){
        this.router.navigate(['/formacion']);  // define your component where you want to go
    }
  
    gotoConocimientos(){
      this.router.navigate(['/conocimientos']);  // define your component where you want to go
    }
}