import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public _coursesTotalAmount: number;
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  public pagesAmount: number;
  public pagesArray: number[];
  @Output() pageNumberClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  @Input() 
  set coursesTotalAmount(coursesNumber: number) {
    this._coursesTotalAmount = coursesNumber;
    this.calculatePaginationParams();
  }

  calculatePaginationParams() {
    this.pagesAmount = Math.ceil(this._coursesTotalAmount / this.itemsPerPage);
    console.log(this._coursesTotalAmount);
    console.log(this.pagesAmount);
    this.createPagesArray();
    console.log(this.pagesArray);
  }

  createPagesArray() {
    const array = [];
    for (let i = 1; i <= this.pagesAmount; i++) {
      array.push(i);
    }
    this.pagesArray = array;
  }

  onPageNumberClick(number) {
    this.currentPage = number;
    const startParam = (number - 1) * this.itemsPerPage;
    this.pageNumberClick.emit({start: startParam, count: this.itemsPerPage});
  }
}
