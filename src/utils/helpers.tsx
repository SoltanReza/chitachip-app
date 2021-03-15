import { MoreOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import React from 'react';

export function enumKeys(enumValue: Object) {
  return Object.keys(enumValue).filter(k => Number.isNaN(+k));
}

export function ellipseString(text: string, maxLength: number = 50) {
  if (!text) return null;
  if (text.length <= maxLength) return text;
  return (
    <>
      {text.substring(0, maxLength)}
      <Tooltip title={text} style={{ maxWidth: '30em' }}>
        <MoreOutlined
          style={{
            transform: 'rotate(90deg)',
            margin: ' 0 .15em',
            fontSize: '1.5em',
          }}
        />
      </Tooltip>
    </>
  );
}

export function downloadBlobLink(url: string, filename: string) {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

export function renderHTML(rawHTML: string) {
  return React.createElement('div', {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
}
