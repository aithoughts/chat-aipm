'use client';

import { AiPMHub } from '@aipmorg/ui/aipmorg';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';



const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      <span>Powered by</span>
      <Link className={styles.logoLink} href={'https://theforage.cn'} target={'_blank'}>
        <AiPMHub size={20} type={'text'} />
        {/* 🌿AiPMHub */}
      </Link>
    </Flexbox>
  );
});

export default BrandWatermark;
