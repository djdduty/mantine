import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Text, SharedTextProps } from '../Text/Text';
import useStyles from './Anchor.styles';

export type AnchorProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedTextProps
>;

type AnchorComponent = <C extends React.ElementType = 'a'>(
  props: AnchorProps<C>
) => React.ReactElement;

export const Anchor: AnchorComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'a'>(
    { component, className, sx, classNames, styles, ...others }: AnchorProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(null, { name: 'Anchor', sx, classNames, styles });
    return (
      <Text
        component={(component || 'a') as any}
        variant="link"
        ref={ref}
        className={cx(classes.root, className)}
        {...others}
      />
    );
  }
);

Anchor.displayName = '@mantine/core/Anchor';
