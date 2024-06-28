import type { NeutralColors, PrimaryColors } from '@aipmui/ui';
import type { ThemeMode } from 'antd-style';

import { LocaleMode } from '@/types/locale';

export interface UserGeneralConfig {
  fontSize: number;
  language: LocaleMode;
  neutralColor?: NeutralColors;
  primaryColor?: PrimaryColors;
  themeMode: ThemeMode;
}
