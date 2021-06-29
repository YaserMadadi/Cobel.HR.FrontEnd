import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';

import { AssessorConnectionLine } from '../../AssessorConnectionLine/assessorConnectionLine';
import { AssessorConnectionLineMasterUI } from '../../AssessorConnectionLine/master/assessorConnectionLine.master';
import { AssessorConnectionLineEditUI } from '../../AssessorConnectionLine/edit/assessorConnectionLine.edit';
import { AssessorConnectionLineDeleteUI } from '../../AssessorConnectionLine/delete/assessorConnectionLine.delete';



@Component({
  selector: 'assessor-assessorConnectionLine-detail',
  templateUrl: './assessor-assessorConnectionLine.detail.html',
  styleUrls: ['./assessor-assessorConnectionLine.detail.css'],
  providers: [AssessorService]
}) 

@Injectable()
export class Assessor_AssessorConnectionLine_DetailUI extends DetailView<Assessor> {

  constructor(private assessorService: AssessorService) {
    super(assessorService);
  }

  public AssessorConnectionLineList : AssessorConnectionLine[] = [];
  
  public currentAssessorConnectionLine : AssessorConnectionLine = new AssessorConnectionLine();

  private assessor: Assessor = new Assessor();

  @Input()
  public set Assessor(value: Assessor) {
    this.assessor = value;
    this.onReload();
  }

  public get Assessor(): Assessor { return this.assessor }

  public onReload(){
    if (Assessor.NotConfirm(this.assessor))
      return;
    this.assessorService
      .ServiceCollection
      .CollectionOfAssessorConnectionLine(this.assessor)
      .then(assessorConnectionLineList => {
        this.AssessorConnectionLineList = assessorConnectionLineList;
        this.currentAssessorConnectionLine = new AssessorConnectionLine();
      });
  }

  public onSelect(i: number) {
    this.currentAssessorConnectionLine = this.AssessorConnectionLineList[i];
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      this.currentAssessorConnectionLine = new AssessorConnectionLine();
  }

  public onDblClicked(masterUI: AssessorConnectionLineMasterUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    masterUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onAdd(editUI: AssessorConnectionLineEditUI) {
    editUI.Assessor = this.assessor;
    editUI.ShowDialog(new AssessorConnectionLine());
  }

  public onEdit(editUI: AssessorConnectionLineEditUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    editUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onDelete(deleteUI: AssessorConnectionLineDeleteUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    deleteUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onEditModal_Closed(assessorConnectionLine: AssessorConnectionLine) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}