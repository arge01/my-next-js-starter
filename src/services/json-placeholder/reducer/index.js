import { initialState } from '../initial';
import { TYPES } from './type';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.PENDING:
      return {
        ...state,
        loading: true,
      };

    case TYPES.FIND:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        entity: payload,
      };

    case TYPES.LIST:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        entities: payload,
      };

    case TYPES.ERROR:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: payload,
      };

    default:
      return state;
  }
};
