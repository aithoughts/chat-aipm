import { ActionIconGroup } from '@aipmui/ui';
import { ActionsBarProps } from '@aipmui/ui/es/ChatList/ActionsBar';
import { memo } from 'react';

import { useChatListActionsBar } from '../hooks/useChatListActionsBar';

export const ErrorActionsBar = memo<ActionsBarProps>(({ onActionClick }) => {
  const { regenerate, del } = useChatListActionsBar();

  return <ActionIconGroup items={[regenerate, del]} onActionClick={onActionClick} type="ghost" />;
});
