---
to: src/pages/<%= h.inflection.capitalize(name) %>/index.tsx
---
import React from 'react';
import Helmet from '@shared/components/common/Helmet';

const <%= h.changeCase.pascal(name) %>Page: React.FC = () => (
  <>
    <Helmet />
    Page <%= h.changeCase.pascal(name) %>
  </>
);

export default <%= h.changeCase.pascal(name) %>Page;
