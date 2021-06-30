import { Injectable } from "@angular/core";
import { EmploymentStatusService } from "../../../Entities/Base.HR/EmploymentStatus/employmentStatus.service";
import { HoldingSectionService } from "../../../Entities/Base/HoldingSection/holdingSection.service";
import { Employee } from "../../../Entities/HR/Employee/employee";
import { EmployeeService } from "../../../Entities/HR/Employee/employee.service";
import { EmployeeServiceCollection } from "../../../Entities/HR/Employee/employee.service.collection";
import { PersonService } from "../../../Entities/HR/Person/person.service";
import { Position } from "../../../Entities/HR/Position/position";
import { EndPointController } from "../../../../xcore/tools/controller.endPoint";
import { TargetSetting } from "../../../Entities/PMS/TargetSetting/targetSetting";

@Injectable({
    providedIn: 'root'
})
export class EmployeeExtendedService extends EmployeeService {
    constructor(serviceCollection: EmployeeServiceCollection,
        personService: PersonService,
        holdingSectionService: HoldingSectionService,
        employmentStatusService: EmploymentStatusService) {
        super(serviceCollection, personService, holdingSectionService, employmentStatusService);
    }

    loadPosition(employee : Employee): Promise<Position[]> {
        let url = EndPointController.BaseUrl + `HR/Employee/${employee.id}/LoadPositions`;
        return this.api_operation.http.get<Position[]>(url, EndPointController.Options).toPromise<Position[]>();
    }

    loadChildren(employee : Employee): Promise<Employee[]> {
        let url = EndPointController.BaseUrl + `HR/Employee/${employee.id}/LoadChildren`;
        return this.api_operation.http.get<Employee[]>(url, EndPointController.Options).toPromise<Employee[]>();
    }

    loadTargetSettings(employee : Employee): Promise<TargetSetting[]> {
        let url = EndPointController.BaseUrl + `HR/Employee/${employee.id}/LoadTargetSettings`;
        return this.api_operation.http.get<TargetSetting[]>(url, EndPointController.Options).toPromise<TargetSetting[]>();
    }


}