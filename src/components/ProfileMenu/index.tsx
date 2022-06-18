import Link from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { ProfileMenuProps } from '@/components/ProfileMenu/types';
import * as S from '@/components/ProfileMenu/styles';

export function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <S.Wrapper>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <S.LinkText>My profile</S.LinkText>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
          <CreditCard size={24} />
          <S.LinkText>My cards</S.LinkText>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <S.LinkText>My Orders</S.LinkText>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link title="Sign out">
          <ExitToApp size={24} />
          <S.LinkText>Sign out</S.LinkText>
        </S.Link>
      </Link>
    </S.Wrapper>
  );
}
