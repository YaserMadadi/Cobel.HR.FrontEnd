import { Component, Input, OnInit } from '@angular/core';
import { Assessment } from 'src/app/Entities/LAD/Assessment/assessment';
import { AssessmentService } from 'src/app/Entities/LAD/Assessment/assessment.service';
import { Conclusion } from 'src/app/Entities/LAD/Conclusion/conclusion';
import { DevelopmentGoal } from 'src/app/Entities/LAD/DevelopmentGoal/developmentGoal';

@Component({
  selector: 'lad-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
  }

  //#region Assessment
  private _assessment: Assessment;

  public get Assessment(): Assessment {
    return this._assessment;
  }

  @Input()
  public set Assessment(v: Assessment) {
    this._assessment = v;
    if (v.id > 0)
      this.loadData();
  }
  //#endregion
  
  strengthConclusions: Conclusion[] = [];

  needsToDevelopConclusions: Conclusion[] = [];

  developmentGoal: DevelopmentGoal = new DevelopmentGoal();

  async loadData() {
    this.assessmentService.ServiceCollection.CollectionOfDevelopmentGoal(this.Assessment)
      .then(list => {
        if (list.length == 0)
          this.developmentGoal = new DevelopmentGoal();
        else
          this.developmentGoal = list[0];
      });

    this.assessmentService.ServiceCollection.CollectionOfConclusion(this.Assessment)
      .then(list => {
          this.strengthConclusions = list.filter(item => item.conclusionType.id == 1);  //1 : Strength
          this.needsToDevelopConclusions = list.filter(item => item.conclusionType.id == 3);  //3: Development Needs
      });

  }

}
