import { LobeChatPluginManifest, LobePluginType } from '@aipmorg/chat-plugin-sdk';

import { CustomPluginParams } from './plugin';
import { LobeToolType } from './tool';

export interface LobeTool {
  customParams?: CustomPluginParams | null;
  identifier: string;
  manifest?: LobeChatPluginManifest | null;
  settings?: any;
  type: LobeToolType;
}

export type LobeToolRenderType = LobePluginType | 'builtin';

export * from './builtin';
