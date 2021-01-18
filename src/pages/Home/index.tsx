/* eslint-disable no-unused-expressions */
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import CustomIcon from '../../components/Icon';
import Input from '../../components/TextInput';
import PageTemplate from '../../components/PageTemplate';
import { ActionsContainer, CardsContainer, SearchButton } from './styles';
import Button from '../../components/Button';
import Card from '../../components/ToolCard';
import Checkbox from '../../components/CheckboxInput/index';
import useApi from '../../hooks/useApi';
import NewToolModal from '../NewTool';
import Pagination from '../../components/Pagination';
import SkeletonCard from '../../components/ToolCard/skeleton';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    limit: currentLimit,
  });
  const [tools, setTools] = useState<Tool[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [tagsToHighlight, setTagsToHighlight] = useState<string[]>([]);
  const { status, data, error, reloadFetch } = useApi<
    ToolsApiResponse,
    QueryParams
  >({
    method: 'get',
    endpoint: 'TOOLS',
    queryParams,
  });

  const handleSubmit = useCallback(
    ({ search, searchByTags }: FormData): void => {
      if (search || (!search && !searchByTags)) {
        setQueryParams(() => ({
          ...queryParams,
          search,
          searchByTags,
          offset: 0,
        }));
        setCurrentPage(1);
        reloadFetch();
      }

      if (searchByTags) {
        setTagsToHighlight(
          search.split(',').map(term => term.toLowerCase().trim()),
        );
      } else {
        setTagsToHighlight([]);
      }
    },
    [queryParams, reloadFetch],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      setQueryParams(() => ({
        ...queryParams,
        offset: (page - 1) * currentLimit,
      }));
      reloadFetch();
    },
    [currentLimit, queryParams, reloadFetch],
  );

  const reloadList = () => {
    setTagsToHighlight([]);
    reloadFetch();
  };

  const handleTagClick = (search: string) => {
    formRef.current?.setFieldValue('search', search);
    formRef.current?.setFieldValue('searchByTags', 'checked');
    handleSubmit({ search, searchByTags: true });
  };

  useEffect(() => {
    if (status === 'DONE') {
      if (data) {
        const { results, totalResults } = data;
        setTools(results);
        setTotalPages(Math.ceil(totalResults / currentLimit));
      }
    }

    if (status === 'ERROR') {
      setErrorMessage(error || 'Ocorreu um erro inesperado');
    }
  }, [currentLimit, data, error, status]);

  return (
    <PageTemplate>
      <NewToolModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        reloadList={reloadList}
      />
      <Header />
      <ActionsContainer>
        <Form ref={formRef} onSubmit={dados => handleSubmit(dados)}>
          <Input name="search" placeholder="search" disableBrowserAutoComplete>
            <CustomIcon icon="search" size={15} />
          </Input>
          <Checkbox name="searchByTags" label="search in tags only" />
        </Form>
        <SearchButton
          styleProps={{ order: 'terciary', type: 'success' }}
          onClick={() => formRef.current?.submitForm()}
        >
          <CustomIcon icon="search" size={12} />
          Search
        </SearchButton>
        <Button
          styleProps={{ order: 'terciary', type: 'neutral' }}
          onClick={() => setModalOpen(true)}
        >
          <CustomIcon icon="add" size={12} />
          Add
        </Button>
      </ActionsContainer>
      {status === 'ERROR' && <h1>{errorMessage}</h1>}
      {status === 'FETCHING' && <SkeletonCard count={currentLimit} />}
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
                reloadList={reloadFetch}
                onTagClick={handleTagClick}
                {...rest}
              />
            ))}
          </CardsContainer>
        </>
      )}
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </PageTemplate>
  );
};

export default Home;
