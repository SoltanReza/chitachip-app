/**
 *
 * NotFound
 *
 */
import { Button, Result } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { StyledNotFound } from './styles';

interface Props {
  className?: string;
}

export const NotFound = memo(({ className }: Props) => {
  return (
    <StyledNotFound className={`NotFound ${className || ''}`}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" className="btn-secondary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </StyledNotFound>
  );
});
