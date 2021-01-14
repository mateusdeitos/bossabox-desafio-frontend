import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import CustomIcon from '../../components/Icon';
import Input from '../../components/TextInput';
import PageTemplate from '../../components/PageTemplate';
import { ActionsContainer, CardsContainer } from './styles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Checkbox from '../../components/CheckboxInput/index';
import useApi from '../../hooks/useApi';

interface Tool {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string;
}

interface ToolsApiResponse {
  currentOffset: number;
  totalResults: number;
  results: Tool[];
}

interface QueryParams {
  search?: string;
  orderBy?: string;
  limit?: number;
  offset?: number;
  searchByTags?: boolean;
}

interface FormData {
  search: string;
  searchByTags: boolean;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [queryParams, setQueryParams] = useState<QueryParams>({});
  const [tools, setTools] = useState<Tool[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [tagsToHighlight, setTagsToHighlight] = useState<string[]>([]);
  const { status, data, error } = useApi<ToolsApiResponse, QueryParams>({
    endpoint: 'TOOLS',
    method: 'get',
    queryParams,
  });

  const handleSubmit = useCallback(
    ({ search, searchByTags }: FormData): void => {
      if (search || (!search && !searchByTags)) {
        setQueryParams(() => ({
          ...queryParams,
          search,
          searchByTags,
        }));
      }

      if (searchByTags) {
        setTagsToHighlight(
          search.split(',').map(term => term.toLowerCase().trim()),
        );
      }
    },
    [queryParams],
  );

  const submitFormManually = () => formRef.current?.submitForm();

  useEffect(() => {
    if (status === 'DONE') {
      if (data) {
        const { results } = data;
        setTools(results);
      }
    }

    if (status === 'ERROR') {
      setErrorMessage(error || 'Ocorreu um erro inesperado');
    }
  }, [data, error, status]);

  return (
    <PageTemplate>
      <Header />
      <ActionsContainer>
        <Form ref={formRef} onSubmit={dados => handleSubmit(dados)}>
          <Input name="search" placeholder="search" disableBrowserAutoComplete>
            <CustomIcon icon="search" />
          </Input>
          <Checkbox
            name="searchByTags"
            label="search in tags only"
            onChange={submitFormManually}
          />
        </Form>
        <Button styleProps={{ order: 'terciary', type: 'neutral' }}>
          <CustomIcon icon="add" />
          Add
        </Button>
      </ActionsContainer>
      {status === 'ERROR' && <h1>{errorMessage}</h1>}
      {status === 'FETCHING' && <h1>Carregando...</h1>}
      {status === 'DONE' && (
        <>
          <CardsContainer>
            {tools.map(({ id, tags, ...rest }, delay) => (
              <Card
                key={id}
                id={id}
                tags={tags.split(',')}
                tagsToHighlight={tagsToHighlight}
                delayAnimation={delay}
                {...rest}
              />
            ))}
          </CardsContainer>
        </>
      )}
    </PageTemplate>
  );
};

export default Home;
