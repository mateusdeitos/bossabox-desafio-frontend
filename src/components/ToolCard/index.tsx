/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import api from '../../services/api';
import Button from '../Button';
import ConfirmationModal from '../ConfirmationModal';
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
  const [isOpen, showConfirmation] = useState(false);
  const deleteTool = async () => {
    await api.delete(`/v1/tools/${id}`);
    reloadList();
  };

  return (
    <Container key={id} delayAnimation={delayAnimation}>
      <ConfirmationModal
        isOpen={isOpen}
        setIsOpen={showConfirmation}
        options={{
          confirmationButtonMessage: 'Yes, remove.',
          message: `Are you sure you want to remove ${title}?`,
          onConfirm: deleteTool,
          title: 'Remove tool',
        }}
      />
      <CardTitleContainer>
        <CardTitle target="_blank" rel="noreferrer" href={url}>
          {title}
        </CardTitle>
        <Button
          styleProps={{ order: 'terciary', type: 'danger' }}
          onClick={() => showConfirmation(true)}
        >
          <CustomIcon icon="remove" size={12} />
          <span>remove</span>
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
