'use client';

import { ChatHeader } from '@aipmorg/ui';
import { AiPMChat } from '@aipmorg/ui/aipmorg';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={<AiPMChat className={styles.logo} extra={'Discover'} size={36} type={'text'} />}
      // left={'🌿AiPMChat'}
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
