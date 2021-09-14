import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'hr-person-delete',
  templateUrl: './person.delete.html',
  styleUrls: ['./person.delete.css'],
  
})
export class PersonDeleteUI extends DeleteModal<Person> {

    constructor(private personService: PersonService){
        super(personService);
    }

}