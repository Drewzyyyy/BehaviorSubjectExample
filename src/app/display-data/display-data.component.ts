import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.sass']
})
export class DisplayDataComponent implements OnInit, OnDestroy {
  data: string[] = [];
  subscribe$ = new Subject<void>();

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(newData => this.data = newData);
  }

  ngOnDestroy(){
    this.subscribe$.next();
    this.subscribe$.complete();
  }

  push(newData: string){
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data => data.push(newData));
  }

  unshift(newData: string){
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data => data.unshift(newData));
  }

}
