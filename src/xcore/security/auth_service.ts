import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { BaseTokenResult } from './base/base_token_result';
import { BaseToken } from './base/base_token';
import { Info } from '../Info';
import { MessageController } from '../tools/controller.message';
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

	//#region CurrentPositions

	private static _currentPositionList: Position[] = [];

	public static get currentPositionList(): Position[] {
		return this._currentPositionList;
	}

	public static set currentPositionList(v: Position[]) {
		this._currentPositionList = v;
	}

	//#endregion

	public async Authenticate(baseToken: BaseToken) {
		let url = EndPointController.BaseUrl + 'Authenticate';
		let h: HttpHeaders = new HttpHeaders();
		let command = this.http.post<BaseTokenResult>(url, baseToken,
			{
				withCredentials: false,
			});

		return command.toPromise<BaseTokenResult>()
			.then(authResult => {
				if (authResult && authResult.id > 0) {
					this.LogedIn(authResult);
				}
				else {
					console.warn(authResult.token);
					MessageController.ShowMessage(MessageType.UserNameOrPasswordNotAccepted);
					AuthGuard.Clear();
				}
			},
				(error) => {
					MessageController.ShowMessage(MessageType.UserNameOrPasswordNotAccepted);
					console.log('Error : ', error);
					AuthGuard.Clear();
				});
	}

	async LogedIn(baseTokenResult: BaseTokenResult) {
		StorageController.Token = baseTokenResult.token;
		AuthGuard.Person_Id = baseTokenResult.person_Id;
		AuthGuard.SAMAccount = baseTokenResult.samAccount;
		AuthGuard.DisplayName = baseTokenResult.displayName;
		MessageController.DisplayName = baseTokenResult.displayName;
		MessageController.ShowMessage(MessageType.Welcome);
		this.permissionController.loadPermission(baseTokenResult.employee_Id);
		this.loadEmployee(baseTokenResult.employee_Id);
		this.loadPerson(baseTokenResult.person_Id);
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
				//console.log('Current Employee : ', employee);
			});
	}

	private loadPositionList(employee: Employee) {
		this.employeeService.ServiceCollection.CollectionOfPositionAssignment(employee)
			.then(list => {
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
		//AuthService.CurrentUserAccount = new UserAccount();
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

	// private getActiveSession(sessionID: string) {
	// 	//let userAccount: UserAccount = new UserAccount();
	// 	//userAccount.currentSessionID = sessionID;
	// 	let url = ServiceConfig.BaseUrl + 'Auth';
	// let command = this.http.post<UserAccount>(url, userAccount, {
	// 	withCredentials: true
	// });
	// return command.toPromise<UserAccount>()
	// 	.then(
	// 		(userAccount: UserAccount) => {
	// 			console.log('user: ', userAccount);
	// 			if (userAccount && userAccount.id > 0) {
	// 				AuthService.CurrentUserAccount = userAccount;
	// 				StorageController.SaveSessionID(userAccount.currentSessionID);
	// 				this.loadDependencies();
	// 				this.router.navigate(['dashboard']);
	// 			} else {
	// 				console.log('error in UserAccount');
	// 				this.router.navigate(['login']);
	// 			}
	// 			return userAccount;
	// 		},
	// 		(error) => {
	// 			console.log('error : ', error);
	// 			AuthService.CurrentUserAccount = new UserAccount();
	// 			AuthGuard.Clear();
	// 			this.router.navigate(['login']);
	// 		});
	//}

	public static isAuthenticated() {
		return AuthService; //&& AuthService.CurrentUserAccount && AuthService.CurrentUserAccount.currentSessionID !== '';

	}

	public isAuthenticated() {
		return AuthService.isAuthenticated();
	}

	// isAdmin() {
	// 	return AuthService.CurrentUserAccount && AuthService.CurrentUserAccount.userName ? AuthService.CurrentUserAccount.userName.toLowerCase().includes('y.madadi-temp') : false;
	// }


}

