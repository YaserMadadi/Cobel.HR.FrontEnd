import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CompetencyItemKPI } from './competencyItemKPI';

import { BehavioralKPI } from '../BehavioralKPI/behavioralKPI';


@Injectable({ providedIn: 'root' })
export class CompetencyItemKPIServiceCollection extends ServiceCollection<CompetencyItemKPI> {

  constructor(public API_Operation: API_Operation<CompetencyItemKPI>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfBehavioralKPI(competencyItemKPI: CompetencyItemKPI, behavioralKPI: BehavioralKPI = BehavioralKPI.SeekInstance()): Promise<BehavioralKPI[]> {
    return super.CollectionOf<BehavioralKPI>(competencyItemKPI, behavioralKPI);
  }

	//endregion
}