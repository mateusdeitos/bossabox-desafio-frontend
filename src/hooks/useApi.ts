import { useEffect, useReducer, useState } from 'react';
import api from '../services/api';

enum EStatusFetch {
  STARTING = 'starting',
  FETCHING = 'fetching',
  ERROR = 'error',
  DONE = 'done',
}
enum EApiMethods {
  get = 'GET',
}

enum EEndpoints {
  TOOLS = '/v1/tools',
  USERS = '/v1/users',
  SESSIONS = '/v1/sessions',
}

interface Response<T> {
  status: keyof typeof EStatusFetch;
  data?: T;
  error?: string;
  reloadFetch(): void;
}

export interface RequestData<QueryParams> {
  method: keyof typeof EApiMethods;
  endpoint: keyof typeof EEndpoints;
  queryParams?: QueryParams;
}

type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

const useApi = <T, QueryParams = void>(
  options: RequestData<QueryParams>,
): Response<T> => {
  const [reload, setReload] = useState(true);
  const { method, endpoint, queryParams } = options;

  const reloadFunction = () => {
    setReload(true);
  };
  const initialState: Response<T> = {
    status: 'STARTING',
    error: undefined,
    data: {} as T,
    reloadFetch: reloadFunction,
  };

  const fetchReducer = (state: Response<T>, action: Action<T>): Response<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'FETCHING' };
      case 'success':
        return { ...initialState, status: 'DONE', data: action.payload };
      case 'failure':
        return { ...initialState, status: 'ERROR', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchApi = async () => {
      dispatch({ type: 'request' });
      try {
        const response = await api({
          method,
          url: EEndpoints[endpoint],
          params: queryParams,
        });

        setTimeout(() => {
          dispatch({ type: 'success', payload: response.data });
        }, 500);
      } catch (error) {
        dispatch({ type: 'failure', payload: error.message });
      } finally {
        setReload(false);
      }
    };
    if (reload) {
      fetchApi();
    }
  }, [endpoint, method, queryParams, reload]);

  return { ...state, reloadFetch: reloadFunction };
};

export default useApi;
