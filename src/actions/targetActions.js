import * as types from './actionTypes';
import targetApi from '../api/targetApi';
import { alertErrors, getFullErrorMessage } from '../utils/helpers';

export const fetchTargetsSuccess = targets => ({
  type: types.FETCH_TARGETS_SUCCESS,
  payload: { targets }
});
  
export const fetchTargetsError = () => ({
  type: types.FETCH_TARGETS_ERROR,
});

export const beginFetchTargets = () => ({
  type: types.FETCH_TARGETS_BEGIN,
});

export const beginCreateNewTarget = () => ({
  type: types.CREATE_NEW_TARGET_BEGIN,
});

export const createNewTargetSuccess = target => ({
  type: types.CREATE_NEW_TARGET_SUCCESS,
  payload: { target }
});

export const createNewTargetError = () => ({
  type: types.CREATE_NEW_TARGET_ERROR
});

export const getTargets = () =>
(dispatch) => {
  dispatch(beginFetchTargets());
  return targetApi.getTargets()
    .then(({ targets }) => {
      dispatch(fetchTargetsSuccess(targets));
    }).catch(({ errors }) => {
      dispatch(fetchTargetsError());
      alertErrors(getFullErrorMessage(errors))
    });
};

export const createNewTarget = (target, coordinates) =>
(dispatch) => {
  debugger;
  dispatch(beginCreateNewTarget());
  return targetApi.createNewTarget(target, coordinates)
    .then((target) => {
      dispatch(createNewTargetSuccess(target));
    }).catch(({ errors }) => {
      dispatch(createNewTargetError());
      alertErrors(getFullErrorMessage(errors));
    });
};
