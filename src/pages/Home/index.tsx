import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import CustomIcon from '../../components/Icon';
import Input from '../../components/TextInput';
import PageTemplate from '../../components/PageTemplate';
import { ActionsContainer, CardsContainer } from './styles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Checkbox from '../../components/CheckboxInput/index';

const cards: {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string;
}[] = [
  {
    id: 14,
    title: 'hotel',
    description:
      'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
    url: 'https://github.com/typicode/hotel',
    tags: 'node,organizing,webapps,domain,developer,https,proxy',
  },
  {
    id: 13,
    title: 'fastify',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    url: 'https://www.fastify.io/',
    tags: 'web,framework,node,http2,https,localhost',
  },
  {
    id: 11,
    title: 'Notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    url: 'https://notion.so',
    tags: 'organization,planning,collaboration,writing,calendar',
  },
  {
    id: 8,
    title: 'Notiosns asdasddasdas🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 7,
    title: 'Notiosns asdasda🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 6,
    title: 'Notiosns asd🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 5,
    title: 'Notiosns 🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 4,
    title: 'Notiosn 🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 3,
    title: 'Notion 🌹',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
  {
    id: 2,
    title: 'Notion',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ✔🐱‍👓🐱‍👓💋😜🌹',
    url: 'https://notion.so',
    tags: 'nice,top',
  },
];

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <PageTemplate>
      <Header />
      <ActionsContainer>
        <Form ref={formRef} onSubmit={data => console.log({ data })}>
          <Input name="search" placeholder="search">
            <CustomIcon icon="search" />
          </Input>
          <Checkbox name="searchByTags" label="search in tags only" />
        </Form>
        <Button styleProps={{ order: 'secondary', type: 'neutral' }}>
          <CustomIcon icon="add" />
          Add
        </Button>
      </ActionsContainer>
      <CardsContainer>
        {cards.map(({ id, tags, ...rest }, delay) => (
          <Card
            key={id}
            id={id}
            tags={tags.split(',')}
            delayAnimation={delay}
            {...rest}
          />
        ))}
      </CardsContainer>
    </PageTemplate>
  );
};

export default Home;
