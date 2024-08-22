import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotTypeService {
  lotTypeEmitter = new EventEmitter<any>;
  constructor() { }

  lotTypeApiCall(data:any){
    this.lotTypeEmitter.emit(data);
  }
}
