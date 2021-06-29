import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { RoleMember } from './roleMember';
import { RoleMemberServiceCollection } from './roleMember.service.collection';

import { EmployeeService } from '../../HR/Employee/employee.service';
import { RoleService } from '../Role/role.service';


@Injectable({ providedIn: 'root' })
export class RoleMemberService extends Service<RoleMember> implements IService<RoleMember> {

  constructor(public ServiceCollection: RoleMemberServiceCollection,
		public EmployeeService: EmployeeService,
		public RoleService: RoleService) {
    super(ServiceCollection.API_Operation, RoleMember.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

  RetrieveById(id: number): Promise<RoleMember> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<RoleMember[]> {
    return super.RetrieveAll();
  }

  Save(roleMember: RoleMember): Promise<RoleMember> {
    if (!RoleMember.Validate(roleMember)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(roleMember);
    }
    return super.Save(roleMember);
  }

  SaveAttached(roleMember: RoleMember): Promise<RoleMember> {
    if (!RoleMember.Validate(roleMember)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(roleMember);
    }
    return super.SaveAttached(roleMember);
  }

  SaveCollection(roleMemberList: RoleMember[]): Promise<Result> {
    return super.SaveCollection(roleMemberList);
  }

  Delete(roleMember: RoleMember): Promise<boolean> {
    return super.Delete(roleMember);
  }

  Seek(roleMember: RoleMember = RoleMember.SeekInstance()): Promise<RoleMember[]> {
    return super.Seek(roleMember);
  }

  SeekLast(roleMember: RoleMember): Promise<RoleMember> {
    return super.SeekLast(roleMember);
  }

  SeekByValue(value: string = ''): Promise<RoleMember[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}