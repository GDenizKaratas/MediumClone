import { createAction, props } from "@ngrx/store";

import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequestInterface } from "src/app/auth/types/loginRequest.interface";
import { ActionTypes } from "src/app/auth/store/actionType";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
)

export const loginSuccesAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors: BackendErrorsInterface}>()
)