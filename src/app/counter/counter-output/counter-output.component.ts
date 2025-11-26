import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { counterSelector } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit{
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: CounterState }>) {} // key : state structure

  ngOnInit(): void {
    this.counter$ = this.store.select(counterSelector);
  }
}
