import clsx from 'clsx';
import React from 'react';

interface TextProps {
  type?: 'p' | 'span' | 'div';
  content?: string;
  children?: React.ReactNode;
  className?: string;
}
const Text: React.FC<TextProps> = ({ type = 'p', children, content, className }) => {
  const Element = type;

  return content ? (
    <Element className={clsx('duration-300 ease-in-out', className)} dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element className={clsx('duration-300 ease-in-out', className)}>{children}</Element>
  );
};

export default Text;
