import { Injectable } from "@angular/core";
import { FunctionalObjectiveServiceCollection } from "src/app/Entities/PMS/FunctionalObjective/functionalObjective.service.collection";
import { TargetSettingService } from "src/app/Entities/PMS/TargetSetting/targetSetting.service";
import { FunctionalObjectiveService } from "../../Entities/PMS/FunctionalObjective/functionalObjective.service";


@Injectable({
    providedIn: 'root'
})
export class FunctionalObjectiveServiceExtended extends FunctionalObjectiveService {

    constructor(serviceCollection: FunctionalObjectiveServiceCollection,
        targetSettingService: TargetSettingService) {

        super(serviceCollection, targetSettingService);
    }

    


}