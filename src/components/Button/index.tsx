import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStylePropsType, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  styleProps?: ButtonStylePropsType;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  styleProps,
  disabled,
  ...rest
}) => {
  return (
    <Container disabled={disabled || loading} classProps={styleProps} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
