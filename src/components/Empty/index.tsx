import Link from 'next/link';

import { Button } from '@/components/Button';

import { EmptyProps } from '@/components/Empty/types';
import * as S from '@/components/Empty/styles';

export function Empty({ title, description, hasLink = false }: EmptyProps) {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="a gamer in a couch playing videogame"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  );
}
