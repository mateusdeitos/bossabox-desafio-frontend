/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
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
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  url,
  description,
  tags,
  tagsToHighlight = [],
  delayAnimation,
}) => {
  return (
    <Container key={id} delayAnimation={delayAnimation}>
      <CardTitleContainer>
        <CardTitle target="_blank" rel="noreferrer" href={url}>
          {title}
        </CardTitle>
        <Button styleProps={{ order: 'secondary', type: 'danger' }}>
          <CustomIcon icon="remove" />
          remove
        </Button>
      </CardTitleContainer>
      <CardDescription>{description}</CardDescription>
      <CardTagsContainer>
        {tags &&
          tags.map((tag, idx) => (
            <CardTag key={idx} highlighted={tagsToHighlight.includes(tag)}>
              #{tag}
            </CardTag>
          ))}
      </CardTagsContainer>
    </Container>
  );
};

export default Card;
