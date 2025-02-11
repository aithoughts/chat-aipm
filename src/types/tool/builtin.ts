import { LobeChatPluginApi, Meta } from '@aipmorg/chat-plugin-sdk';
import { ReactNode } from 'react';

export interface BuiltinToolManifest {
  api: LobeChatPluginApi[];

  /**
   * Plugin name
   */
  identifier: string;
  /**
   * metadata
   * @desc Meta data of the plugin
   */
  meta: Meta;
  systemRole: string;
  /**
   * plugin runtime type
   * @default default
   */
  type?: 'builtin';
}

export interface LobeBuiltinTool {
  identifier: string;
  manifest: BuiltinToolManifest;
  type: 'builtin';
}

export interface BuiltinRenderProps<Content = any, Arguments = any, State = any> {
  args: Arguments;
  content: Content;
  identifier?: string;
  messageId: string;
  pluginState?: State;
}

export type BuiltinRender = <T = any>(props: BuiltinRenderProps<T>) => ReactNode;

export interface BuiltinPortalProps<Arguments = Record<string, any>, State = any> {
  arguments: Arguments;
  identifier: string;
  messageId: string;
  state: State;
}

export type BuiltinPortal = <T = any>(props: BuiltinPortalProps<T>) => ReactNode;
