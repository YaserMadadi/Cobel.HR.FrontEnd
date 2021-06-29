import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { Employee } from '../../Employee/employee';
import { EmployeeMasterUI } from '../../Employee/master/employee.master';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { EmployeeDeleteUI } from '../../Employee/delete/employee.delete';



@Component({
  selector: 'person-employee-detail',
  templateUrl: './person-employee.detail.html',
  styleUrls: ['./person-employee.detail.css'],
  providers: [PersonService]
}) 

@Injectable()
export class Person_Employee_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public EmployeeList : Employee[] = [];
  
  public currentEmployee : Employee = new Employee();

  private person: Person = new Person();

  @Input()
  public set Person(value: Person) {
    this.person = value;
    this.onReload();
  }

  public get Person(): Person { return this.person }

  public onReload(){
    if (Person.NotConfirm(this.person))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfEmployee(this.person)
      .then(employeeList => {
        this.EmployeeList = employeeList;
        this.currentEmployee = new Employee();
      });
  }

  public onSelect(i: number) {
    this.currentEmployee = this.EmployeeList[i];
    if (Employee.NotConfirm(this.currentEmployee))
      this.currentEmployee = new Employee();
  }

  public onDblClicked(masterUI: EmployeeMasterUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    masterUI.ShowDialog(this.currentEmployee);
  }

  public onAdd(editUI: EmployeeEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new Employee());
  }

  public onEdit(editUI: EmployeeEditUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    editUI.ShowDialog(this.currentEmployee);
  }

  public onDelete(deleteUI: EmployeeDeleteUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    deleteUI.ShowDialog(this.currentEmployee);
  }

  public onEditModal_Closed(employee: Employee) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}