import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  data$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Husky','Corgi','Great Dane']);
  constructor() { }
}
