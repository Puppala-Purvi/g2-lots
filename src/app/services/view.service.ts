import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private viewModeSubject = new BehaviorSubject<string>('list');
  viewMode = this.viewModeSubject.asObservable();

  setViewMode(viewMode: string) {
    this.viewModeSubject.next(viewMode);
  }
}
