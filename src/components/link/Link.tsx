import * as NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps extends NextLink.LinkProps {
  children?: ReactNode;
  color?: string;
  style?: React.CSSProperties;
}

const Link = ({ children, color, href, style }: LinkProps) => (
  // eslint-disable-next-line react/jsx-pascal-case
  <NextLink.default
    href={href}
    style={{ textDecoration: 'none', color: color || 'black', ...style }}
  >
    {children}
  </NextLink.default>
);

export default Link;
