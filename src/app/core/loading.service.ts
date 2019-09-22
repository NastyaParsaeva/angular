import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public observer: Subject<boolean>;

  constructor() {
    this.observer = new Subject<any>();
  }

  public showLoadingBlock() {
    this.observer.next(true);
  }

  public hideLoadingBlock() {
    this.observer.next(false);
  }


}
