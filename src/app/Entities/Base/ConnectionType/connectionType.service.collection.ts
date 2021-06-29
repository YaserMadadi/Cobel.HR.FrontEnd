import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ConnectionType } from './connectionType';

import { CoachConnectionLine } from '../../LAD/CoachConnectionLine/coachConnectionLine';
import { AssessorConnectionLine } from '../../LAD/AssessorConnectionLine/assessorConnectionLine';
import { PersonConnection } from '../../HR/PersonConnection/personConnection';


@Injectable({ providedIn: 'root' })
export class ConnectionTypeServiceCollection extends ServiceCollection<ConnectionType> {

  constructor(public API_Operation: API_Operation<ConnectionType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessorConnectionLine(connectionType: ConnectionType, assessorConnectionLine: AssessorConnectionLine = AssessorConnectionLine.SeekInstance()): Promise<AssessorConnectionLine[]> {
    return super.CollectionOf<AssessorConnectionLine>(connectionType, assessorConnectionLine);
  }

  CollectionOfCoachConnectionLine(connectionType: ConnectionType, coachConnectionLine: CoachConnectionLine = CoachConnectionLine.SeekInstance()): Promise<CoachConnectionLine[]> {
    return super.CollectionOf<CoachConnectionLine>(connectionType, coachConnectionLine);
  }

  CollectionOfPersonConnection(connectionType: ConnectionType, personConnection: PersonConnection = PersonConnection.SeekInstance()): Promise<PersonConnection[]> {
    return super.CollectionOf<PersonConnection>(connectionType, personConnection);
  }

	//endregion
}