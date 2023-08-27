import * as Aos from 'aos';
import React from 'react';

interface AnimateProps extends Aos.AosOptions {
  children: React.ReactNode;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  className,
  name,
  mirror,
  anchorPlacement,
  duration,
  offset,
  delay,
  easing = 'ease-in-out',
  once = true,
  ...props
}) => (
  <div
    data-aos={name}
    data-aos-offset={offset}
    data-aos-delay={delay}
    data-aos-duration={duration}
    data-aos-easing={easing}
    data-aos-mirror={mirror}
    data-aos-once={once}
    data-aos-anchor-placement={anchorPlacement}
    className={className}
    {...props}
  >
    {children}
  </div>
);

Animate.defaultProps = {};

export default Animate;
