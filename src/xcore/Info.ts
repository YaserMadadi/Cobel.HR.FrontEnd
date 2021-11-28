import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Info {

  constructor();
  constructor(schema: string, name: string);
  constructor(schema: string, name: string, title: string);
  constructor(schema: string = '', name: string = '', title: string = '') {
    this.schema = schema;
    this.name = name;
    this.title = title;
  }

  public schema: string = '';
  public name: string = '';
  public title: string = '';


  public get fullName(): string {
    return `[${this.schema}].[${this.name}]`;
  };

  public get IsEmpty(): boolean {
    return this.name.length === 0;
  }
}




