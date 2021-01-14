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
  post = 'POST',
  delete = 'DELETE',
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
}

export interface RequestData<QueryParams, BodyParams> {
  method: keyof typeof EApiMethods;
  endpoint: keyof typeof EEndpoints;
  body?: BodyParams;
  queryParams?: QueryParams;
}

type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

const useApi = <T, QueryParams = void, BodyParams = void>(
  options: RequestData<QueryParams, BodyParams>,
): Response<T> => {
  const { method, endpoint, body, queryParams } = options;
  const initialState: Response<T> = {
    status: 'STARTING',
    error: undefined,
    data: {} as T,
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
          data: body,
          params: queryParams,
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA2MjU1NTUsImV4cCI6MTYxMzIxNzU1NSwic3ViIjoiMTcifQ.cdKUHwaayz8Pi-BWWyDDm6UfzZGlnn0DwBECVY8DJE0`,
          },
        });

        setTimeout(() => {
          dispatch({ type: 'success', payload: response.data });
        }, 500);
      } catch (error) {
        dispatch({ type: 'failure', payload: error.message });
      }
    };
    fetchApi();
  }, [body, endpoint, method, queryParams]);

  return state;
};

export default useApi;
