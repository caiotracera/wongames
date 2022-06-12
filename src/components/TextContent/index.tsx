import { Heading } from '@/components/Heading';

import { TextContentProps } from '@/components/TextContent/types';
import * as S from '@/components/TextContent/styles';

export function TextContent({ title, content }: TextContentProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  );
}
