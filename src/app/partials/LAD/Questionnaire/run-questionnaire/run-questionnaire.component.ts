import { Component, Input, OnInit } from '@angular/core';
import { AnswerType } from 'app/Entities/LAD/AnswerType/answerType';
import { AnswerTypeService } from 'app/Entities/LAD/AnswerType/answerType.service';
import { AnswerTypeItem } from 'app/Entities/LAD/AnswerTypeItem/answerTypeItem';
import { CoachingQuestionary } from 'app/Entities/LAD/CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryService } from 'app/Entities/LAD/CoachingQuestionary/coachingQuestionary.service';
import { CoachingQuestionaryAnswered } from 'app/Entities/LAD/CoachingQuestionaryAnswered/coachingQuestionaryAnswered';
import { CoachingQuestionaryDetail } from 'app/Entities/LAD/CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { QuestionaryItem } from 'app/Entities/LAD/QuestionaryItem/questionaryItem';
import { MasterModal } from 'xcore/tools/ui/view-base/master.modal';

@Component({
  selector: 'app-run-questionnaire',
  templateUrl: './run-questionnaire.component.html',
  styleUrls: ['./run-questionnaire.component.scss']
})
export class RunQuestionnaireComponent extends MasterModal<CoachingQuestionary> implements OnInit {

  constructor(
    private coachingQuestionnaireService: CoachingQuestionaryService,
    private answerTypeService: AnswerTypeService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadList();
  }

  @Input()
  private CoachingQuestionnaire: CoachingQuestionary;

  public async loadList() {
    this.CoachingQuestionnaire = this.currentInstance;
    this.CoachingQuestionnaire.listOfCoachingQuestionaryAnswered = [];
    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail = [];

    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail.push(new CoachingQuestionaryDetail());
    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail[0].coachingQuestionary.id = this.CoachingQuestionnaire.id;
    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail[0].date = new Date();
    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail[0].from = new Date().toLocaleTimeString();
    //console.log(this.CoachingQuestionnaire)
    this.QuestionnaireItemList = await this.coachingQuestionnaireService.QuestionaryTypeService.ServiceCollection.CollectionOfQuestionaryItem(this.CoachingQuestionnaire.questionaryType);
    //console.table(this.QuestionnaireItemList);

    this.answerTypeList = await this.answerTypeService.RetrieveAll();
    this.answerTypeList.forEach(async item => {
      await this.answerTypeService.ServiceCollection.CollectionOfAnswerTypeItem(item)
        .then(list => item.listOfAnswerTypeItem = list);
    });
    console.log(this.answerTypeList);
    await this.answerTypeList.forEach(async item => {
      await this.answerTypeService.ServiceCollection.CollectionOfQuestionaryItem(item).then(list => {
        if (item.id == 1) { //1: TextBox
          this.QuestionItemsText = list;
        } else if (item.id == 2) { // 2: 5 option
          this.QuestionItems5 = list;
        } else if (item.id == 3) { // 3 : 3 option
          this.QuestionItems3 = list;
        }

      });

    });
  }

  answerTypeList: AnswerType[] = [];

  QuestionItems5: QuestionaryItem[] = [];
  //QuestionAnswered5: CoachingQuestionnaireAnswered[] = [];

  QuestionItems3: QuestionaryItem[] = [];

  QuestionItemsText: QuestionaryItem[] = [];

  public getAnswerType(answerType_Id: number): AnswerTypeItem[] {
    if (this.answerTypeList.length == 0 ||
      this.answerTypeList.filter(i => i.id == answerType_Id).length == 0)
      return [];
    return this.answerTypeList.filter(i => i.id == answerType_Id)[0].listOfAnswerTypeItem;
  }

  //answerTypeItemList: AnswerTypeItem[] = [];

  QuestionnaireItemList: QuestionaryItem[] = [];

  getQuestionnaireItems(answerType_Id: number) {
    return this.QuestionnaireItemList.filter(i => i.answerType.id == answerType_Id);
  }

  async SubmitQuestionnaire() {
    this.CoachingQuestionnaire.listOfCoachingQuestionaryDetail[0].to = new Date().toLocaleTimeString();
    this.CoachingQuestionnaire.isDone = true;

    this.QuestionItems5.forEach(item => {
      let coachingQuestionnaireAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
      coachingQuestionnaireAnswered.coachingQuestionary.id = this.CoachingQuestionnaire.id;
      coachingQuestionnaireAnswered.questionaryItem.id = item.id;
      coachingQuestionnaireAnswered.answerValue = +item.descriptor;
      this.CoachingQuestionnaire.listOfCoachingQuestionaryAnswered.push(coachingQuestionnaireAnswered);
    });

    this.QuestionItems3.forEach(item => {
      let coachingQuestionnaireAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
      coachingQuestionnaireAnswered.coachingQuestionary.id = this.CoachingQuestionnaire.id;
      coachingQuestionnaireAnswered.questionaryItem.id = item.id;
      coachingQuestionnaireAnswered.answerValue = +item.descriptor;
      this.CoachingQuestionnaire.listOfCoachingQuestionaryAnswered.push(coachingQuestionnaireAnswered);
    });

    this.QuestionItemsText.forEach(item => {
      let coachingQuestionnaireAnswered: CoachingQuestionaryAnswered = new CoachingQuestionaryAnswered();
      coachingQuestionnaireAnswered.coachingQuestionary.id = this.CoachingQuestionnaire.id;
      coachingQuestionnaireAnswered.questionaryItem.id = item.id;
      coachingQuestionnaireAnswered.answerText = item.descriptor;
      this.CoachingQuestionnaire.listOfCoachingQuestionaryAnswered.push(coachingQuestionnaireAnswered);
    });

    let result = await this.coachingQuestionnaireService.SaveAttached(this.CoachingQuestionnaire);
    //if(CoachingQuestionnaire.Confirm(result))
    this.onClose();

    //MessageManager.ShowMessage(MessageType.EndOfEvaluation);
  }

  SubmitTest() {
    this.QuestionItems5.forEach(item => {
      console.log(item);
    })
  }

}
