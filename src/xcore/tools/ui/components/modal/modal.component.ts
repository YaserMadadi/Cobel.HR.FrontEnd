import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

export enum ModalType {
  Edit = 1,
  Master = 2,
  Delete = 3,
  Others = 4
}


@Component({
  selector: 'XDialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends NgForm implements OnInit, OnDestroy {


  constructor() {
    super([], []);
  }

  //it cause to drop of the typing a character speeds in inputs...

 //@HostListener('window:keydown', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   console.log('here');
  //   if (event.keyCode === 27 && this.IsShown == true)
  //     this.onCloseButton_Press();
  //     //event.preventDefault();
  //   console.log('here 2 ');
  // }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  @Input()
  Height: number;

  @Input()
  IsShown: boolean = false;

  @Output()
  OnClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public modalType: ModalType = ModalType.Edit;

  @Input()
  public set ModalType(value: ModalType) {
    this.modalType = value;
  }

  public get ModalType(): ModalType {
    return this.modalType;
  }


  @Input()
  public Header: string = '';

  public get ButtonVisible(): boolean {
    return this.ModalType === ModalType.Edit || this.ModalType === ModalType.Delete;
  }

  public onCloseButton_Press() {
    this.IsShown = false;
    this.OnClosed.emit(false);
  }

  // private KeyDownReviewer(key: KeyboardEvent) {
  //   if (!key.getModifierState(key.key) && key.keyCode === 27)
  //     this.onCloseButton_Press();
  // }
}


