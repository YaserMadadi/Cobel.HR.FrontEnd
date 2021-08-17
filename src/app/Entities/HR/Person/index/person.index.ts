import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Person } from '../person';
import { PersonService } from '../person.service';
import { PersonMasterUI } from '../master/person.master';
import { PersonEditUI } from '../edit/person.edit';
import { PersonDeleteUI } from '../delete/person.delete';

import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';
import { City } from '../../../Base/City/city';
import { CityEditUI } from '../../../Base/City/edit/city.edit';
import { Religion } from '../../../Base/Religion/religion';
import { ReligionEditUI } from '../../../Base/Religion/edit/religion.edit';
import { HealthStatus } from '../../../Base/HealthStatus/healthStatus';
import { HealthStatusEditUI } from '../../../Base/HealthStatus/edit/healthStatus.edit';
import { Country } from '../../../Base/Country/country';
import { CountryEditUI } from '../../../Base/Country/edit/country.edit';
import { MaritalStatus } from '../../../Base.HR/MaritalStatus/maritalStatus';
import { MaritalStatusEditUI } from '../../../Base.HR/MaritalStatus/edit/maritalStatus.edit';






import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UserAccountEditUI } from '../../../Core/UserAccount/edit/userAccount.edit';
import { UserAccount } from '../../../Core/UserAccount/userAccount';
import { WorkExperienceEditUI } from '../../WorkExperience/edit/workExperience.edit';
import { WorkExperience } from '../../WorkExperience/workExperience';
import { UniversityHistoryEditUI } from '../../UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../UniversityHistory/universityHistory';
import { SchoolHistoryEditUI } from '../../SchoolHistory/edit/schoolHistory.edit';
import { SchoolHistory } from '../../SchoolHistory/schoolHistory';
import { PersonDrivingLicenseEditUI } from '../../PersonDrivingLicense/edit/personDrivingLicense.edit';
import { PersonDrivingLicense } from '../../PersonDrivingLicense/personDrivingLicense';
import { PersonConnectionEditUI } from '../../PersonConnection/edit/personConnection.edit';
import { PersonConnection } from '../../PersonConnection/personConnection';
import { PersonCertificateEditUI } from '../../PersonCertificate/edit/personCertificate.edit';
import { PersonCertificate } from '../../PersonCertificate/personCertificate';
import { PassportEditUI } from '../../Passport/edit/passport.edit';
import { Passport } from '../../Passport/passport';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { MilitaryService } from '../../MilitaryService/militaryService';
import { MaritalInfoEditUI } from '../../MaritalInfo/edit/maritalInfo.edit';
import { MaritalInfo } from '../../MaritalInfo/maritalInfo';
import { LanguageAbilityEditUI } from '../../LanguageAbility/edit/languageAbility.edit';
import { LanguageAbility } from '../../LanguageAbility/languageAbility';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { Employee } from '../../Employee/employee';
import { HabitancyEditUI } from '../../Habitancy/edit/habitancy.edit';
import { Habitancy } from '../../Habitancy/habitancy';
import { ImpersonateEditUI } from '../../../Core/Impersonate/edit/impersonate.edit';
import { Impersonate } from '../../../Core/Impersonate/impersonate';
import { LogEditUI } from '../../../Core/Log/edit/log.edit';
import { Log } from '../../../Core/Log/log';



@Component({
  selector: 'hr-person-index',
  templateUrl: './person.index.html',
  styleUrls: ['./person.index.css']
})
export class PersonIndexUI extends IndexView<Person> implements AfterViewInit, IIndexView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
    this.filterInstance = Person.SeekInstance();
    this.currentInstance = new Person();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  //#region UserAccount

  public userAccount_Clicked(userAccountEditUI: UserAccountEditUI) {
    userAccountEditUI.Person = this.currentInstance;
    userAccountEditUI.ShowDialog(new UserAccount());
  }
                    
  public userAccountEditUI_Closed(userAccount: UserAccount) {
    if (!userAccount)
      return;
    this.onRefresh();
  }
  
  //#endregion UserAccount

  //#region WorkExperience

  public workExperience_Clicked(workExperienceEditUI: WorkExperienceEditUI) {
    workExperienceEditUI.Person = this.currentInstance;
    workExperienceEditUI.ShowDialog(new WorkExperience());
  }
                    
  public workExperienceEditUI_Closed(workExperience: WorkExperience) {
    if (!workExperience)
      return;
    this.onRefresh();
  }
  
  //#endregion WorkExperience

  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.Person = this.currentInstance;
    universityHistoryEditUI.ShowDialog(new UniversityHistory());
  }
                    
  public universityHistoryEditUI_Closed(universityHistory: UniversityHistory) {
    if (!universityHistory)
      return;
    this.onRefresh();
  }
  
  //#endregion UniversityHistory

  //#region SchoolHistory

  public schoolHistory_Clicked(schoolHistoryEditUI: SchoolHistoryEditUI) {
    schoolHistoryEditUI.Person = this.currentInstance;
    schoolHistoryEditUI.ShowDialog(new SchoolHistory());
  }
                    
  public schoolHistoryEditUI_Closed(schoolHistory: SchoolHistory) {
    if (!schoolHistory)
      return;
    this.onRefresh();
  }
  
  //#endregion SchoolHistory


  //#region PersonDrivingLicense

  public personDrivingLicense_Clicked(personDrivingLicenseEditUI: PersonDrivingLicenseEditUI) {
    personDrivingLicenseEditUI.Person = this.currentInstance;
    personDrivingLicenseEditUI.ShowDialog(new PersonDrivingLicense());
  }
                    
  public personDrivingLicenseEditUI_Closed(personDrivingLicense: PersonDrivingLicense) {
    if (!personDrivingLicense)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonDrivingLicense

  //#region PersonConnection

  public personConnection_Clicked(personConnectionEditUI: PersonConnectionEditUI) {
    personConnectionEditUI.Person = this.currentInstance;
    personConnectionEditUI.ShowDialog(new PersonConnection());
  }
                    
  public personConnectionEditUI_Closed(personConnection: PersonConnection) {
    if (!personConnection)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonConnection

  //#region PersonCertificate

  public personCertificate_Clicked(personCertificateEditUI: PersonCertificateEditUI) {
    personCertificateEditUI.Person = this.currentInstance;
    personCertificateEditUI.ShowDialog(new PersonCertificate());
  }
                    
  public personCertificateEditUI_Closed(personCertificate: PersonCertificate) {
    if (!personCertificate)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonCertificate

  //#region Passport

  public passport_Clicked(passportEditUI: PassportEditUI) {
    passportEditUI.Person = this.currentInstance;
    passportEditUI.ShowDialog(new Passport());
  }
                    
  public passportEditUI_Closed(passport: Passport) {
    if (!passport)
      return;
    this.onRefresh();
  }
  
  //#endregion Passport

  //#region MilitaryService

  public militaryService_Clicked(militaryServiceEditUI: MilitaryServiceEditUI) {
    militaryServiceEditUI.Person = this.currentInstance;
    militaryServiceEditUI.ShowDialog(new MilitaryService());
  }
                    
  public militaryServiceEditUI_Closed(militaryService: MilitaryService) {
    if (!militaryService)
      return;
    this.onRefresh();
  }
  
  //#endregion MilitaryService

  //#region MaritalInfo

  public maritalInfo_Clicked(maritalInfoEditUI: MaritalInfoEditUI) {
    maritalInfoEditUI.Person = this.currentInstance;
    maritalInfoEditUI.ShowDialog(new MaritalInfo());
  }
                    
  public maritalInfoEditUI_Closed(maritalInfo: MaritalInfo) {
    if (!maritalInfo)
      return;
    this.onRefresh();
  }
  
  //#endregion MaritalInfo

  //#region LanguageAbility

  public languageAbility_Clicked(languageAbilityEditUI: LanguageAbilityEditUI) {
    languageAbilityEditUI.Person = this.currentInstance;
    languageAbilityEditUI.ShowDialog(new LanguageAbility());
  }
                    
  public languageAbilityEditUI_Closed(languageAbility: LanguageAbility) {
    if (!languageAbility)
      return;
    this.onRefresh();
  }
  
  //#endregion LanguageAbility

  //#region Employee

  public employee_Clicked(employeeEditUI: EmployeeEditUI) {
    employeeEditUI.Person = this.currentInstance;
    employeeEditUI.ShowDialog(new Employee());
  }
                    
  public employeeEditUI_Closed(employee: Employee) {
    if (!employee)
      return;
    this.onRefresh();
  }
  
  //#endregion Employee

  //#region Habitancy

  public habitancy_Clicked(habitancyEditUI: HabitancyEditUI) {
    habitancyEditUI.Person = this.currentInstance;
    habitancyEditUI.ShowDialog(new Habitancy());
  }
                    
  public habitancyEditUI_Closed(habitancy: Habitancy) {
    if (!habitancy)
      return;
    this.onRefresh();
  }
  
  //#endregion Habitancy

  //#region Log

  public log_Clicked(logEditUI: LogEditUI) {
    logEditUI.Person = this.currentInstance;
    logEditUI.ShowDialog(new Log());
  }
                    
  public logEditUI_Closed(log: Log) { 
    if (!log)
      return;
    this.onRefresh();
  }
  
  //#endregion Log


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(personEditUI: PersonEditUI){
    personEditUI.ShowDialog(new Person());
  }

  resetFilter() {
    this.filterInstance = Person.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(person: Person) {
    this.onRefresh();
    this.currentInstance = new Person();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}