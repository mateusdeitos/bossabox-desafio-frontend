/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import api from '../../services/api';
import Button from '../Button';
import CustomIcon from '../Icon';
import {
  Container,
  CardTitleContainer,
  CardTitle,
  CardDescription,
  CardTagsContainer,
  CardTag,
} from './styles';

interface ICardProps {
  id: number;
  title: string;
  url: string;
  description: string;
  tags: string[];
  tagsToHighlight?: string[];
  delayAnimation: number;
  reloadList(): void;
  onTagClick(tag: string): void;
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  url,
  description,
  tags,
  tagsToHighlight = [],
  delayAnimation,
  onTagClick,
  reloadList,
}) => {
  const deleteTool = async (id: number) => {
    await api.delete(`/v1/tools/${id}`);
    reloadList();
  };

  return (
    <Container key={id} delayAnimation={delayAnimation}>
      <CardTitleContainer>
        <CardTitle target="_blank" rel="noreferrer" href={url}>
          {title}
        </CardTitle>
        <Button
          styleProps={{ order: 'terciary', type: 'danger' }}
          onClick={() => deleteTool(id)}
        >
          <CustomIcon icon="remove" />
          remove
        </Button>
      </CardTitleContainer>
      <CardDescription>{description}</CardDescription>
      <CardTagsContainer>
        {tags &&
          tags.map((tag, idx) => (
            <CardTag
              onClick={() => onTagClick(tag)}
              key={idx}
              highlighted={tagsToHighlight.includes(tag)}
            >
              #{tag}
            </CardTag>
          ))}
      </CardTagsContainer>
    </Container>
  );
};

export default Card;
