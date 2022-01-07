import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'formacion',
    moduleId: module.id,
    templateUrl: 'formacion.component.html'
})

export class Formacion{
    constructor(private router: Router) {}

    gotoHome(){
        this.router.navigateByUrl('');  // define your component where you want to go
    }

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