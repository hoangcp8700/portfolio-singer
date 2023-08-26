import clsx from 'clsx';
import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content?: string;
}
const Heading: React.FC<HeadingProps> = ({ type = 'h2', children, content, className }) => {
  const Element = type;

  return content ? (
    <Element className={clsx('duration-300 ease-in-out', className)} dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element className={clsx('duration-300 ease-in-out', className)}>{children}</Element>
  );
};

export default Heading;
