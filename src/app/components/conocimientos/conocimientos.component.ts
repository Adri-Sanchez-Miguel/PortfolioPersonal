import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'conocimientos',
    moduleId: module.id,
    templateUrl: 'conocimientos.component.html'
})

export class Conocimientos{
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