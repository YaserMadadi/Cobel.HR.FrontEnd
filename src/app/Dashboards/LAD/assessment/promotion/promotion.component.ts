import { Component, Input, OnInit } from '@angular/core';
import { Assessment } from 'src/app/Entities/LAD/Assessment/assessment';
import { AssessmentService } from 'src/app/Entities/LAD/Assessment/assessment.service';
import { PromotionAssessment } from 'src/app/Entities/LAD/PromotionAssessment/promotionAssessment';

@Component({
  selector: 'lad-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
  }

  private _assessment: Assessment;

  public get assessment(): Assessment {
    return this._assessment;
  }

  @Input()
  public set assessment(v: Assessment) {
    this._assessment = v;
    console.log(v);
    if (!v.isNew)
      this.loadData();
  }

  public currentPromotionAssessment: PromotionAssessment = new PromotionAssessment();

  async loadData() {
    this.assessmentService.ServiceCollection.CollectionOfPromotionAssessment(this.assessment)
      .then(list => {
        console.log('PromotionAssessment : ', list);
        if (list.length == 0)
          this.currentPromotionAssessment = new PromotionAssessment();
        else
          this.currentPromotionAssessment = list[0];
      })
  }

}
