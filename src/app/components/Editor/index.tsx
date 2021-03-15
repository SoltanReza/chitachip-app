/**
 *
 * Editor
 *
 */
import React, { memo, useEffect, useState } from 'react';
import LzEditor from 'react-lz-editor';
import { StyledEditor } from './styles';

interface Props {
  className?: string;
  placeholder?: string;
  value?: null | string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const Editor = memo(
  ({ className, readOnly, value, placeholder, onChange }: Props) => {
    const [content, setContent] = useState(value || '');

    useEffect(() => {
      onChange(content);
    }, [content, onChange]);

    return (
      <StyledEditor className={`Editor ${className || ''}`}>
        <LzEditor
          lang="fa"
          active
          disabled={readOnly}
          image={false}
          video={false}
          audio={false}
          placeholder={placeholder}
          importContent={content}
          cbReceiver={setContent}
        />
      </StyledEditor>
    );
  },
);
