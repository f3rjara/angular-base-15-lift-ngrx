import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../../../core/store/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  incrementar() {
    this.store.dispatch( actions.increment() );
  }

  decrementar() {
    this.store.dispatch( actions.decrement() );
  }

  reset() {
    this.store.dispatch( actions.reset() );
  }

}
