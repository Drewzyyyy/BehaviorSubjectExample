import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
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

  pop(){
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data => data.pop());
  }

  shift(){
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data => data.shift());
  }

}
