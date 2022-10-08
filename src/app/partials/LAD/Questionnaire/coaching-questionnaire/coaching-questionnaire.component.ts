import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'Entities/HR/Employee/employee.service';
import { Person } from 'Entities/HR/Person/person';
import { PersonService } from 'Entities/HR/Person/person.service';
import { CoachingQuestionary } from 'Entities/LAD/CoachingQuestionary/coachingQuestionary';
import { AuthGuard } from 'xcore/security/auth_guard';
import { MessageController } from 'xcore/tools/controller.message';
import { MessageType } from 'xcore/tools/Enum';
import { RunQuestionnaireComponent } from '../run-questionnaire/run-questionnaire.component';

@Component({
  selector: 'coaching-questionnaire',
  templateUrl: './coaching-questionnaire.component.html',
  styleUrls: ['./coaching-questionnaire.component.scss']
})
export class CoachingQuestionnaireComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  filterCoachingQuestionnaire: CoachingQuestionary = new CoachingQuestionary();

  coachingQuestionnaireList: CoachingQuestionary[] = [];

  currentCoachingQuestionnaire: CoachingQuestionary = new CoachingQuestionary();

  private async loadData() {
    this.coachingQuestionnaireList = await this.personService.ServiceCollection.CollectionOfCoachingQuestionary_ResponsiblePerson(new Person(AuthGuard.Person_Id));
    console.log(this.coachingQuestionnaireList);
  }

  onSelect(index: number) {
    this.currentCoachingQuestionnaire = this.coachingQuestionnaireList[index];
  }

  onDblClicked(runQuestionnaireUI: RunQuestionnaireComponent) {
    if (this.currentCoachingQuestionnaire.isDone) {
      MessageController.ShowMessage(MessageType.QuestionnaireIsDone);
      return;
    }

    runQuestionnaireUI.ShowDialog(this.currentCoachingQuestionnaire);
  }

  onRefresh() {
    this.loadData();
  }

  AfterShow() {

  }

}
