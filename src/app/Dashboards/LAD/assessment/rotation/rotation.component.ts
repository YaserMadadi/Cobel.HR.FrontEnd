import { Component, Input, OnInit } from '@angular/core';
import { Assessment } from 'src/app/Entities/LAD/Assessment/assessment';
import { AssessmentService } from 'src/app/Entities/LAD/Assessment/assessment.service';
import { RotationAssessment } from 'src/app/Entities/LAD/RotationAssessment/rotationAssessment';

@Component({
  selector: 'lad-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss']
})
export class RotationComponent implements OnInit {

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
  }
  
  currentRotationAssessment: RotationAssessment = new RotationAssessment();

  private _assessment: Assessment;

  public get assessment(): Assessment {
    return this._assessment;
  }

  @Input()
  public set assessment(v: Assessment) {
    this._assessment = v;
    if (!v.isNew)
      this.loadData();
  }

  async loadData() {
    let list = await this.assessmentService.ServiceCollection.CollectionOfRotationAssessment(this.assessment);
    if (list.length == 0)
      this.currentRotationAssessment = new RotationAssessment();
    else
      this.currentRotationAssessment = list[0];
  }

}
