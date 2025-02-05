import React, { useEffect } from 'react';
import classNames from 'classnames';
import './main.scss';

export type MainProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type InternalMainProps = MainProps;

/**
 * @deprecated Do not use this component, use HTML section tag
 */
export const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  useEffect(() => {
    console.error(`Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.`);
  }, []);
  return (
    <section {...props} className={`${classNames(className, 'pf-l-page__main-section pf-c-page__main-section')}`}>
      {children}
    </section>
  );
};

export const InternalMain = Main;

export default Main;
