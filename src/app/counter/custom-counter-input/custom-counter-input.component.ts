import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { channelNameSelector } from '../state/counter.selectors';
// import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<{counter: CounterState}>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(channelNameSelector);
  }

  onAdd(): void {
    console.log("onAdd, value: ", this.value);
    // this.store.dispatch(customIncrement({value: +this.value}));
  }

  onChangeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }
}
