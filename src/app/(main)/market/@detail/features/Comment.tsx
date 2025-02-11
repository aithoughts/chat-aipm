import { Giscus } from '@aipmorg/ui';
import { memo } from 'react';

const Comment = memo<{ identifier: string }>(({ identifier }) => (
  <Giscus
    category="General"
    categoryId="DIC_kwDOKON5YM4CZNRJ"
    id="lobehub"
    mapping="specific"
    repo="aipmhub/aipm-chat-agents"
    repoId="R_kgDOKON5YA"
    term={identifier}
  />
));

export default Comment;
