import { Icon } from '@aipmorg/ui';
import { createStyles } from 'antd-style';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, isDarkMode }) => ({
  card: css`
    cursor: pointer;

    padding-block: 12px;
    padding-inline: 16px;

    background: ${isDarkMode ? token.colorFillTertiary : token.colorBgContainer};
    border: 1px solid ${token.colorFillSecondary};
    border-radius: ${token.borderRadiusLG}px;

    &:hover {
      background: ${isDarkMode ? token.colorFillSecondary : token.colorBgContainer};
      border: 1px solid ${token.colorFill};
    }
  `,
}));

export interface ItemCardProps {
  href: string;
  icon?: LucideIcon;
  label: string;
  value: string;
}

const ItemCard = memo<ItemCardProps>(({ label, icon, href }) => {
  const { styles, theme } = useStyles();

  return (
    <Link href={href} style={{ color: 'inherit' }} target={'_blank'}>
      <Flexbox className={styles.card} gap={12} horizontal>
        {icon && <Icon fill={theme.colorText} icon={icon} size={{ fontSize: 18 }} />}
        {label}
      </Flexbox>
    </Link>
  );
});

export default ItemCard;
