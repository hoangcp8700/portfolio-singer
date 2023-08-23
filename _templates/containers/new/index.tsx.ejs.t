---
to: src/containers/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';

interface <%= h.changeCase.pascal(name) %>ContainerProps {
  children?: React.ReactNode;
}

const <%= h.changeCase.pascal(name) %>Container: React.FC<<%= h.changeCase.pascal(name) %>ContainerProps> = () => <div>Container <%= h.changeCase.pascal(name) %></div>;

export default <%= h.changeCase.pascal(name) %>Container;
