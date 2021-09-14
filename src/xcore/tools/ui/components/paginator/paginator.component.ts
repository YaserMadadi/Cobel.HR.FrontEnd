import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Paginate } from '../../../paginate';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.IsShown = true;
  }

  @Output()
  onChangePage: EventEmitter<number> = new EventEmitter<number>(true);

  @Input('Paginate')
  paginate: Paginate = new Paginate(80, 1);

  @Input('RecordPerPage')
  public set RecordPerPage(value: number) {
    this.paginate.recordPerPage = value;
  }

  IsShown: boolean = false;

  public RecordIndex(index: number): number {
    return (this.paginate.currentPage - 1) * this.paginate.recordPerPage + index + 1;
  }

  pagelist: number[] = [];

  goToPage(n: number) {
    if (this.paginate.currentPage === n)
      return;
    this.paginate.currentPage = n < 1 ? 1 : (n > this.paginate.pageCount ? this.paginate.pageCount : n);
    this.openLoading();
    this.onChangePage.emit(this.paginate.currentPage);
    //this.IsShown = false;  
  }

  public openLoading() {
    this.IsShown = true;
  }

  public reset() {
    this.paginate.currentPage = 1;
  }

  public RefreshUI(paginate: Paginate = new Paginate()) {
    if (paginate == null)
      return;
    this.IsShown = false;
    this.pagelist = [];
    this.paginate.pageCount = paginate.pageCount == 0 ? 1 : paginate.pageCount;
    if (this.paginate.currentPage > paginate.pageCount)
      this.reset();
    if (this.paginate.currentPage <= 4) {
      this.redraw(1);
    } else if (this.paginate.currentPage >= this.paginate.pageCount - 3) {
      this.redraw(this.paginate.pageCount - 4);
    } else {
      this.redraw(this.paginate.currentPage - 2);
    }
  }

  private redraw(start: number, lenght: number = 5) {
    for (let i = start; i < start + lenght; i++) {
      this.pagelist.push(i);

      if (i == this.paginate.pageCount)
        break;

    }
  }


}
