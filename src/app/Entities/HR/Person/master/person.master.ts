import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { PersonDeleteUI } from '../delete/person.delete';
import { PersonEditUI } from '../edit/person.edit';
import { CoachingQuestionaryService } from '../../../LAD/CoachingQuestionary/coachingQuestionary.service';
import { UserAccountService } from '../../../Core/UserAccount/userAccount.service';
import { WorkExperienceService } from '../../WorkExperience/workExperience.service';
import { UniversityHistoryService } from '../../UniversityHistory/universityHistory.service';
import { SchoolHistoryService } from '../../SchoolHistory/schoolHistory.service';
import { RelativeService } from '../../Relative/relative.service';
import { PersonDrivingLicenseService } from '../../PersonDrivingLicense/personDrivingLicense.service';
import { PersonConnectionService } from '../../PersonConnection/personConnection.service';
import { PersonCertificateService } from '../../PersonCertificate/personCertificate.service';
import { PassportService } from '../../Passport/passport.service';
import { MilitaryServiceService } from '../../MilitaryService/militaryService.service';
import { MaritalInfoService } from '../../MaritalInfo/maritalInfo.service';
import { LanguageAbilityService } from '../../LanguageAbility/languageAbility.service';
import { EmployeeService } from '../../Employee/employee.service';
import { HabitancyService } from '../../Habitancy/habitancy.service';
import { ImpersonateService } from '../../../Core/Impersonate/impersonate.service';
import { LogService } from '../../../Core/Log/log.service';



@Component({
  selector: 'hr-person-master',
  templateUrl: './person.master.html',
  styleUrls: ['./person.master.css']
})
export class PersonMasterUI extends MasterModal<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }
}