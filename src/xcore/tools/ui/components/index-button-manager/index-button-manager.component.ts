import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'index-button-manager',
  templateUrl: './index-button-manager.component.html',
  styleUrls: ['./index-button-manager.component.scss']
})
export class IndexButtonManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public Id: number;



  //#region AddButton
  @Output()
  public onAddButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  addButtonClicked() {
    this.onAddButtonClicked.emit();
  }
  //#endregion



  //#region EditButton

  @Output()
  public onEditButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  editButtonClicked() {
    this.onEditButtonClicked.emit();
  }
  //#endregion



  //#region   DeleteButton
  @Output()
  public onDeleteButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  deleteButtonClicked() {
    this.onDeleteButtonClicked.emit();
  }
  //#endregion

  //#region   RefreshButton
  @Output()
  public onRefreshButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  refreshButtonClicked() {
    this.onRefreshButtonClicked.emit();
  }
  //#endregion

  //#region   printButton
  @Output()
  public onPrintButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  printButtonClicked() {
    this.onPrintButtonClicked.emit();
  }
  //#endregion

  //#region   LogButton
  @Output()
  public onLogButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  logButtonClicked() {
    this.onLogButtonClicked.emit();
  }
  //#endregion


}
