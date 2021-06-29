import { YearService } from "../../Entities/Base/Year/year.service";
import { EmployeeService } from "../../Entities/HR/Employee/employee.service";
import { TargetSettingServiceCollection } from "../../Entities/PMS/TargetSetting/targetSetting.service.collection";
import { TargetSettingService } from "../../Entities/PMS/TargetSetting/targetSetting.service";
import { PositionService } from "../../Entities/HR/Position/position.service";
import { TargetSetting } from "../../Entities/PMS/TargetSetting/targetSetting";
import { FunctionalObjective } from "../../Entities/PMS/FunctionalObjective/functionalObjective";
import { EndPointController } from "../../../xcore/tools/controller.endPoint";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TargetSettingServiceExtended extends TargetSettingService {
    constructor(serviceCollection: TargetSettingServiceCollection,
        employeeService: EmployeeService,
        yearService: YearService,
        positionService: PositionService) {

        super(serviceCollection, employeeService, positionService, yearService);
    }

    collectionOfParentFunctionalObjective(targetSetting: TargetSetting): Promise<FunctionalObjective[]> {
        console.log('TargetSetting : ', targetSetting);
        let url = EndPointController.BaseUrl + `PMS/TargetSetting/${targetSetting.id}/CollectionOfParentalFunctionalObjective`;
        console.log('Url : ', url);
        return this.api_operation.http.get<FunctionalObjective[]>(url, EndPointController.Options).toPromise<FunctionalObjective[]>();
    }
}