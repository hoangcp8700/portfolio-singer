---
to: src/components/<%= level %>/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';

interface <%= h.changeCase.pascal(name) %>Props {
  children?: React.ReactNode;
}

const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = () => <div>Component <%= h.changeCase.pascal(name) %></div>;

export default <%= h.changeCase.pascal(name) %>;
