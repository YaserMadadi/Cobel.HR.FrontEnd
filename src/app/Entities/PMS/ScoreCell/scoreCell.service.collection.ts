import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { ScoreCell } from './scoreCell';

import { OperationalAppraise } from '../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraise } from '../NonOperationalAppraise/nonOperationalAppraise';
import { CellAction } from '../CellAction/cellAction';


@Injectable({ providedIn: 'root' })
export class ScoreCellServiceCollection extends ServiceCollection<ScoreCell> {

  constructor(public API_Operation: API_Operation<ScoreCell>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfCellAction(scoreCell: ScoreCell, cellAction: CellAction = CellAction.SeekInstance()): Promise<CellAction[]> {
    return super.CollectionOf<CellAction>(scoreCell, cellAction);
  }

  CollectionOfNonOperationalAppraise(scoreCell: ScoreCell, nonOperationalAppraise: NonOperationalAppraise = NonOperationalAppraise.SeekInstance()): Promise<NonOperationalAppraise[]> {
    return super.CollectionOf<NonOperationalAppraise>(scoreCell, nonOperationalAppraise);
  }

  CollectionOfOperationalAppraise(scoreCell: ScoreCell, operationalAppraise: OperationalAppraise = OperationalAppraise.SeekInstance()): Promise<OperationalAppraise[]> {
    return super.CollectionOf<OperationalAppraise>(scoreCell, operationalAppraise);
  }

	//endregion
}