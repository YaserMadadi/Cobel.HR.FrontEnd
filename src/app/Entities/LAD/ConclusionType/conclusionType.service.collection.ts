import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ConclusionType } from './conclusionType';

import { Conclusion } from '../Conclusion/conclusion';


@Injectable({ providedIn: 'root' })
export class ConclusionTypeServiceCollection extends ServiceCollection<ConclusionType> {

  constructor(public API_Operation: API_Operation<ConclusionType>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfConclusion(conclusionType: ConclusionType, conclusion: Conclusion = Conclusion.SeekInstance()): Promise<Conclusion[]> {
    return super.CollectionOf<Conclusion>(conclusionType, conclusion);
  }

	//endregion
}