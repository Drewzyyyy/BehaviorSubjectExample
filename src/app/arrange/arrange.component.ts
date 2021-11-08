import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from '../search.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.sass']
})
export class ArrangeComponent implements OnInit, OnDestroy {
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

  sort(){
    this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data => data.sort());
  }

  filter(param: string){
    param.toLowerCase();
    // let currData: string[];
    // this.searchService.data$.pipe(takeUntil(this.subscribe$)).subscribe(data =>
    //   console.table(data);
    //   console.table(data.filter(text => text.toLowerCase().includes(param)));
    //   let newData = data.filter(text => text.toLowerCase().includes(param));
    //   console.table(newData);
    //   this.data = data
    //   console.table(data);
    // );
    this.searchService.data$.next(this.data.filter(text => text.toLowerCase().includes(param)));
  }

}
