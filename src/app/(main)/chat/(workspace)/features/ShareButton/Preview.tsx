import { Avatar, ChatHeaderTitle, Markdown } from '@aipmorg/ui';
import { AiPMChat } from '@aipmorg/ui/aipmorg';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import pkg from '@/../package.json';
import ModelTag from '@/components/ModelTag';
import ChatList from '@/features/Conversation/components/ChatList';
import { useAgentStore } from '@/store/agent';
import { agentSelectors } from '@/store/agent/selectors';
import { useSessionStore } from '@/store/session';
import { sessionMetaSelectors, sessionSelectors } from '@/store/session/selectors';

import PluginTag from '../PluginTag';
import { useStyles } from './style';
import { FieldType } from './type';

const Preview = memo<FieldType & { title?: string }>(
  ({ title, withSystemRole, withBackground, withFooter }) => {
    const [model, plugins, systemRole] = useAgentStore((s) => [
      agentSelectors.currentAgentModel(s),
      agentSelectors.currentAgentPlugins(s),
      agentSelectors.currentAgentSystemRole(s),
    ]);
    const [isInbox, description, avatar, backgroundColor] = useSessionStore((s) => [
      sessionSelectors.isInboxSession(s),
      sessionMetaSelectors.currentAgentDescription(s),
      sessionMetaSelectors.currentAgentAvatar(s),
      sessionMetaSelectors.currentAgentBackgroundColor(s),
    ]);

    const { t } = useTranslation('chat');
    const { styles } = useStyles(withBackground);

    const displayTitle = isInbox ? t('inbox.title') : title;
    const displayDesc = isInbox ? t('inbox.desc') : description;

    return (
      <div className={styles.preview}>
        <div className={withBackground ? styles.background : undefined} id={'preview'}>
          <Flexbox className={styles.container} gap={16}>
            <div className={styles.header}>
              <Flexbox align={'flex-start'} gap={12} horizontal>
                <Avatar avatar={avatar} background={backgroundColor} size={40} title={title} />
                <ChatHeaderTitle
                  desc={displayDesc}
                  tag={
                    <>
                      <ModelTag model={model} />
                      {plugins?.length > 0 && <PluginTag plugins={plugins} />}
                    </>
                  }
                  title={displayTitle}
                />
              </Flexbox>
              {withSystemRole && systemRole && (
                <div className={styles.role}>
                  <Markdown variant={'chat'}>{systemRole}</Markdown>
                </div>
              )}
            </div>
            <ChatList />
            {withFooter ? (
              <Flexbox align={'center'} className={styles.footer} gap={4}>
                {/* <AiPMChat type={'combine'} /> */}
                <AiPMChat type={'text'} />
                {/* 🌿AiPMChat */}
                <div className={styles.url}>{pkg.homepage}</div>
              </Flexbox>
            ) : (
              <div />
            )}
          </Flexbox>
        </div>
      </div>
    );
  },
);

export default Preview;
