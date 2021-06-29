import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';

import { AppraisalApproverConfig } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig';
import { AppraisalApproverConfigMasterUI } from '../../../PMS/AppraisalApproverConfig/master/appraisalApproverConfig.master';
import { AppraisalApproverConfigEditUI } from '../../../PMS/AppraisalApproverConfig/edit/appraisalApproverConfig.edit';
import { AppraisalApproverConfigDeleteUI } from '../../../PMS/AppraisalApproverConfig/delete/appraisalApproverConfig.delete';



@Component({
  selector: 'departmentCategory-appraisalApproverConfig-detail',
  templateUrl: './departmentCategory-appraisalApproverConfig.detail.html',
  styleUrls: ['./departmentCategory-appraisalApproverConfig.detail.css'],
  providers: [PositionCategoryService]
}) 

@Injectable()
export class DepartmentCategory_AppraisalApproverConfig_DetailUI extends DetailView<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }

  public AppraisalApproverConfigList : AppraisalApproverConfig[] = [];
  
  public currentAppraisalApproverConfig : AppraisalApproverConfig = new AppraisalApproverConfig();

  private departmentCategory: PositionCategory = new PositionCategory();

  @Input()
  public set DepartmentCategory(value: PositionCategory) {
    this.departmentCategory = value;
    this.onReload();
  }

  public get DepartmentCategory(): PositionCategory { return this.departmentCategory }

  public onReload(){
    if (PositionCategory.NotConfirm(this.departmentCategory))
      return;
    this.positionCategoryService
      .ServiceCollection
      .CollectionOfAppraisalApproverConfig_DepartmentCategory(this.departmentCategory)
      .then(appraisalApproverConfigList => {
        this.AppraisalApproverConfigList = appraisalApproverConfigList;
        this.currentAppraisalApproverConfig = new AppraisalApproverConfig();
      });
  }

  public onSelect(i: number) {
    this.currentAppraisalApproverConfig = this.AppraisalApproverConfigList[i];
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      this.currentAppraisalApproverConfig = new AppraisalApproverConfig();
  }

  public onDblClicked(masterUI: AppraisalApproverConfigMasterUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    masterUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onAdd(editUI: AppraisalApproverConfigEditUI) {
    editUI.DepartmentCategory = this.departmentCategory;
    editUI.ShowDialog(new AppraisalApproverConfig());
  }

  public onEdit(editUI: AppraisalApproverConfigEditUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    editUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onDelete(deleteUI: AppraisalApproverConfigDeleteUI) {
    if (AppraisalApproverConfig.NotConfirm(this.currentAppraisalApproverConfig))
      return;
    deleteUI.ShowDialog(this.currentAppraisalApproverConfig);
  }

  public onEditModal_Closed(appraisalApproverConfig: AppraisalApproverConfig) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}