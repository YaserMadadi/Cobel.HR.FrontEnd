import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AccessToken } from './base/base_token_result';
import { LoginUser } from './base/base_token';
import { Info } from '../Info';
import { MessageController, toastType } from '../tools/controller.message';
import { Result } from '../tools/Result';
import { AuthGuard } from './auth_guard';
import { StorageController } from '../tools/controller.storage';
import { PermissionController } from '../tools/controller.permission';
import { MessageType } from '../tools/Enum';
import { EndPointController } from '../tools/controller.endPoint';
import { PersonService } from '../../app/Entities/HR/Person/person.service';
import { Employee } from '../../app/Entities/HR/Employee/employee';
import { Person } from '../../app/Entities/HR/Person/person';
import { EmployeeService } from '../../app/Entities/HR/Employee/employee.service';
import { Position } from '../../app/Entities/HR/Position/position';
import { PositionService } from '../../app/Entities/HR/Position/position.service';
import { ResultData } from '../tools/ResultData';

// import { PersonService } from '../../app/Entities/HR/Person/person.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends EndPointController {

	constructor(public router: Router,
		public http: HttpClient,
		private permissionController: PermissionController,
		private employeeService: EmployeeService,
		private positionService: PositionService) {
		super(http);
		let token = StorageController.Token;

	}

	//#region CurrentPerson

	private static _currentPerson: Person;

	public static get currentPerson(): Person {
		return this._currentPerson;
	}

	public static set currentPerson(v: Person) {
		this._currentPerson = v;
	}

	//#endregion


	//#region  CurrentEmployee

	private static _currentEmployee: Employee;

	public static get currentEmployee(): Employee {
		return this._currentEmployee;
	}

	public static set currentEmployee(v: Employee) {
		this._currentEmployee = v;
	}

	//#endregion

	//#region	CurrentEmployeeManager

	private static _currentEmployeeManager: Employee;

	public static get currentEmployeeManager(): Employee {
		return this._currentEmployeeManager;
	}

	public static set currentEmployeeManager(v: Employee) {
		this._currentEmployee = v;
	}
	//#endregion


	//#region CurrentPositions

	private static _currentPositionList: Position[] = [];

	public static get currentPositionList(): Position[] {
		return this._currentPositionList;
	}

	public static set currentPositionList(v: Position[]) {
		this._currentPositionList = v;
	}

	//#endregion

	public async Authenticate(loginUser: LoginUser) {
		let url = EndPointController.BaseUrl + 'Authenticate/Login';
		let h: HttpHeaders = new HttpHeaders();
		let command = this.http.post<ResultData<AccessToken>>(url, loginUser,
			{
				withCredentials: false,
			});

		return command.toPromise<ResultData<AccessToken>>()
			.then(authResult => {
				console.log(authResult);
				if (authResult && authResult.id > 0) {
					this.LogedIn(authResult.data);
				}
				else {
					console.warn(authResult.data.token);
					MessageController.ShowMessage(MessageType.UserNameOrPasswordNotAccepted);
					AuthGuard.Clear();
				}
			},
				(error) => {
					if (!(error instanceof HttpErrorResponse)) {
						MessageController.ShowMessage(MessageType.UserNameOrPasswordNotAccepted);
					} else {

						let result = <ResultData<AccessToken>>error.error;

						console.log('Result in Error Handler : ', result);
						if (result && result.message && result.message.length > 0)

							MessageController.ShowMessage(result.message, toastType.error);

						else

							MessageController.ShowMessage(MessageType.UserNameOrPasswordNotAccepted);
						// else if (result && result.sqlMessage && result.sqlMessage.length > 0)

						// 	MessageController.ShowMessage(result.sqlMessage, toastType.error);

						// else

						// 	MessageController.ShowMessage(`Error in ${action} • More Details : ${error}`, toastType.error);
					}
					console.log('Error : ', error);
					AuthGuard.Clear();
				});
	}

	async LogedIn(accessToken: AccessToken) {
		if (isDevMode())
			console.log(accessToken);
		StorageController.Token = accessToken.token;
		AuthGuard.Person_Id = accessToken.person_Id;
		AuthGuard.SAMAccount = accessToken.samAccount;
		AuthGuard.DisplayName = accessToken.displayName;
		MessageController.DisplayName = accessToken.displayName;
		MessageController.ShowMessage(MessageType.Welcome);
		this.permissionController.loadPermission(accessToken.employee_Id);
		this.loadEmployee(accessToken.employee_Id);
		this.loadPerson(accessToken.person_Id);
	}

	private loadPerson(person_id: number) {
		this.employeeService.PersonService.RetrieveById(person_id)
			.then(person => {
				AuthService.currentPerson = person;
			});
	}

	private loadEmployee(employee_id: number) {
		this.employeeService.RetrieveById(employee_id)
			.then(employee => {
				AuthService.currentEmployee = employee;
				this.loadPositionList(employee);
			});
	}

	private loadPositionList(employee: Employee) {
		this.employeeService.ServiceCollection.CollectionOfPositionAssignment(employee)
			.then(list => {
				console.table(list);
				list.forEach(PositionAssignmentItem => {
					this.positionService.RetrieveById(PositionAssignmentItem.position.id)
						.then(position => {
							AuthService.currentPositionList.push(position);
						});
				});
			});
	}

	public Navigate(info: Info) {
		this.router.navigate([info.schema, info.name]);
	}

	SignOut() {
		AuthGuard.SignOut();
		MessageController.DisplayName = '';
	}

	ChangePasswordResult: EventEmitter<Result> = new EventEmitter<Result>();

	public ChangePassword(oldPass: string, newPass: string) {
		const value: { oldPass: string, newPass: string } =
		{
			oldPass: Md5.hashStr(oldPass).toString(),
			newPass: Md5.hashStr(newPass).toString()
		};
		let url = EndPointController.BaseUrl + 'Auth/ChangePassword';
		let command = this.http.post<Result>(url, value, {
			headers: EndPointController.Headers,
			withCredentials: true
		});
		return command.toPromise<Result>()
			.then(
				(result: Result) => {
					this.ChangePasswordResult.emit(result);
					return result;
				},
				(errorResult: Result) => {
					this.ChangePasswordResult.emit(errorResult);
					return errorResult;
				}
			);
	}

	public static isAuthenticated() {
		return AuthService; //&& AuthService.CurrentUserAccount && AuthService.CurrentUserAccount.currentSessionID !== '';

	}

	public isAuthenticated() {
		return AuthService.isAuthenticated();
	}

}

