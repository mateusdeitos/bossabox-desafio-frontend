/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ApiActionButton from '../ApiActionButton';
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
  return (
    <Container key={id} delayAnimation={delayAnimation}>
      <CardTitleContainer>
        <CardTitle target="_blank" rel="noreferrer" href={url}>
          {title}
        </CardTitle>
        <ApiActionButton
          apiOptions={{
            method: 'delete',
            url: `/v1/tools/${id}`,
            callback: reloadList,
            successMessage: 'Tool removed successfully',
          }}
          confirmationOptions={{
            title: 'Remove Tool',
            message: `Are you sure you want to delete ${title}?`,
          }}
          styleProps={{ order: 'terciary', type: 'danger' }}
        >
          <CustomIcon icon="remove" size={12} />
          <span>remove</span>
        </ApiActionButton>
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
