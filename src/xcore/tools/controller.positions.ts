import { Employee } from "../../app/Entities/HR/Employee/employee";
import { AuthGuard } from "../security/auth_guard";
import { AuthService } from "../security/auth_service";

export class PositionController {
    constructor() {

    }

    //this Position_Id is realted to PMS responsible for.
    public static HR_PMS_Position_Id: number = 2131;

    public static Admin_Employee_Id: number = 5774;

    public static IsPMSAdmin() {
        return AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length > 0;
    }

    public static IsAdmin() {
        return AuthService.currentEmployee.id == PositionController.Admin_Employee_Id;
    }

    public static IsCurrentUser(employee: Employee) {
        return AuthService.currentEmployee.id == employee.id;
    }
}