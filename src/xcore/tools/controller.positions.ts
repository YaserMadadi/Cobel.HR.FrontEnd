import { Employee } from "../../app/Entities/HR/Employee/employee";
import { AuthService } from "../security/auth_service";
import { PermissionController } from "./controller.permission";

export class PositionController {
    constructor() {

    }

    //this Position_Id is realted to PMS responsible for.
    public static HR_PMS_Position_Id: number = 2131;

    // Role.Id = 6  --->   ( Appraise-Admin )
    public static HR_PMS_AppraiseAdminRole: number = 6;

    public static System_Admin_Employee_Id: number = 5774;

    public static IsPMSAdmin() {
        //  Role.Id = 6    =>   
        return PermissionController.RolePermissionList.filter(item => item.role.id == this.HR_PMS_AppraiseAdminRole).length > 0;

        // Check currentEmployee exists AppraiseResponsibilityPosition in her/his PositionList.
        //  ********* ( Deprecated! ) Don't use  ************
        //return AuthService.currentPositionList.filter(p => p.id == PositionController.HR_PMS_Position_Id).length > 0;
    }

    public static IsAdmin() {
        return AuthService.currentEmployee.id == PositionController.System_Admin_Employee_Id;
    }

    public static IsCurrentUser(employee: Employee) {
        return AuthService.currentEmployee.id == employee.id;
    }
}