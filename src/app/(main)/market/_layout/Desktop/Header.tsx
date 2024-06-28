'use client';

import { ChatHeader } from '@aipmui/ui';
// import { AiPMChat } from '@aipmui/ui/aipmorg';
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
  // const { styles } = useStyles();

  return (
    <ChatHeader
      // left={<LobeChat className={styles.logo} extra={'Discover'} size={36} type={'text'} />}
      left={'🌿AiPMChat'}
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
