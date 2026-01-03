'use client';

import React, { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => (
    <script
      dangerouslySetInnerHTML={{
        __html: `</script>${extractStyle(cache)}<script>`,
      }}
    />
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
