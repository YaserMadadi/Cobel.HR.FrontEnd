import { Injectable } from '@angular/core';

import { Service } from '../../../../xcore/service/service';
import { IService } from '../../../../xcore/service/base/service.interface';
import { API_Operation } from '../../../../xcore/service/api.operation';
import { MessageController } from '../../../../xcore/tools/controller.message';
import { PermissionType, MessageType, PermissionResult } from '../../../../xcore/tools/Enum';
import { PermissionController } from '../../../../xcore/tools/controller.permission';
import { Info } from '../../../../xcore/Info';
import { Result } from '../../../../xcore/tools/Result';

import { Employee } from './employee';
import { EmployeeServiceCollection } from './employee.service.collection';

import { PersonService } from '../Person/person.service';
import { HoldingSectionService } from '../../Base/HoldingSection/holdingSection.service';
import { EmploymentStatusService } from '../../Base.HR/EmploymentStatus/employmentStatus.service';
import { VisionComment } from '../../PMS/VisionComment/visionComment';
import { EmployeeDetail } from '../EmployeeDetail/employeeDetail';
import { FunctionalKPIComment } from '../../PMS/FunctionalKPIComment/functionalKPIComment';
import { VisionApproved } from '../../PMS/VisionApproved/visionApproved';
import { FunctionalObjectiveComment } from '../../PMS/FunctionalObjectiveComment/functionalObjectiveComment';
import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { Vision } from '../../PMS/Vision/vision';
import { Coaching } from '../../LAD/Coaching/coaching';
import { FinalApprovement } from '../../PMS/FinalApprovement/finalApprovement';
import { Assessment } from '../../LAD/Assessment/assessment';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { EmployeeNotification } from '../EmployeeNotification/employeeNotification';
import { Training } from '../../IDEA/Training/training';
import { CriticalIncidentRecognition } from '../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { CriticalIncident } from '../../PMS/CriticalIncident/criticalIncident';
import { EmployeeEvent } from '../EmployeeEvent/employeeEvent';
import { Contract } from '../Contract/contract';
import { OperationalAppraise } from '../../PMS/OperationalAppraise/operationalAppraise';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';
import { RoleMember } from '../../Core/RoleMember/roleMember';
import { NonOperationalAppraise } from '../../PMS/NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';


@Injectable({ providedIn: 'root' })
export class EmployeeService extends Service<Employee> implements IService<Employee> {

  constructor(public ServiceCollection: EmployeeServiceCollection,
		public PersonService: PersonService,
		public HoldingSectionService: HoldingSectionService,
		public EmploymentStatusService: EmploymentStatusService) {
    super(ServiceCollection.API_Operation, Employee.Info);
  }

  CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //region Methods

CreateInstance() {
   return new Employee();
}

  RetrieveById(id: number): Promise<Employee> {
    return super.RetrieveById(id);
  }

  RetrieveAll(): Promise<Employee[]> {
    return super.RetrieveAll();
  }

  Save(employee: Employee): Promise<Employee> {
    if (!Employee.Validate(employee)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employee);
    }
    return super.Save(employee);
  }

  SaveAttached(employee: Employee): Promise<Employee> {
    if (!Employee.Validate(employee)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(employee);
    }
    return super.SaveAttached(employee);
  }

  SaveCollection(employeeList: Employee[]): Promise<Result> {
    return super.SaveCollection(employeeList);
  }

  Delete(employee: Employee): Promise<boolean> {
    return super.Delete(employee);
  }

  Seek(employee: Employee = Employee.SeekInstance()): Promise<Employee[]> {
    return super.Seek(employee);
  }

  SeekLast(employee: Employee): Promise<Employee> {
    return super.SeekLast(employee);
  }

  SeekByValue(value: string = ''): Promise<Employee[]> {
    return super.SeekByValue(value);
  }

	//endregion
  

  //Remove Temprorally
}