import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styles: [
  ]
})
export class Pagina2Component implements OnInit {

  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado')
  }

  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i;
    })







    
  }

}
