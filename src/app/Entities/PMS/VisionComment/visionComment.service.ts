import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { VisionComment } from './visionComment';
import { VisionCommentServiceCollection } from './visionComment.service.collection';

import { VisionService } from '../Vision/vision.service';
import { EmployeeService } from '../../HR/Employee/employee.service';


@Injectable({ providedIn: 'root' })
export class VisionCommentService extends Service<VisionComment> implements IService<VisionComment> {

  constructor(public ServiceCollection: VisionCommentServiceCollection,
		public VisionService: VisionService,
		public EmployeeService: EmployeeService) {
    super(ServiceCollection.API_Operation, VisionComment.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new VisionComment();
}

  RetrieveById(id: number): Promise<VisionComment> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<VisionComment[]> {
    return super.RetrieveAll();
  }

  Save(visionComment: VisionComment): Promise<VisionComment> {
    if (!VisionComment.Validate(visionComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(visionComment);
    }
    return super.Save(visionComment);
  }

  SaveAttached(visionComment: VisionComment): Promise<VisionComment> {
    if (!VisionComment.Validate(visionComment)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(visionComment);
    }
    return super.SaveAttached(visionComment);
  }

  SaveCollection(visionCommentList: VisionComment[]): Promise<Result> {
    return super.SaveCollection(visionCommentList);
  }

  Delete(visionComment: VisionComment): Promise<boolean> {
    return super.Delete(visionComment);
  }

  Seek(visionComment: VisionComment = VisionComment.SeekInstance()): Promise<VisionComment[]> {
    return super.Seek(visionComment);
  }

  SeekLast(visionComment: VisionComment): Promise<VisionComment> {
    return super.SeekLast(visionComment);
  }

  SeekByValue(value: string = ''): Promise<VisionComment[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}