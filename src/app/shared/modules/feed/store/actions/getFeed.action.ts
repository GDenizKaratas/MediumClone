import { createAction, props } from '@ngrx/store';
import { ActionType } from 'src/app/shared/modules/feed/store/actionTypes';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);
