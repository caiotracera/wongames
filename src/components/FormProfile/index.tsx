import { Heading } from '@/components/Heading';
import { TextField } from '@/components/TextField';

import * as S from '@/components/FormProfile/styles';
import { Button } from '@/components/Button';

export function FormProfile() {
  return (
    <S.Wrapper>
      <Heading lineBottom color={'black'} size={'small'}>
        My profile
      </Heading>

      <S.Form>
        <TextField
          name={'name'}
          placeholder={'Name'}
          label={'Name'}
          initialValue={'John Doe'}
        />

        <TextField
          name={'email'}
          placeholder={'E-mail'}
          label={'E-mail'}
          type={'email'}
          initialValue={'johndoe@example.com'}
          disabled
        />

        <TextField
          name={'password'}
          placeholder={'Type your password'}
          label={'Password'}
          type={'password'}
        />

        <TextField
          name={'new_password'}
          placeholder={'New password'}
          label={'New password'}
          type={'password'}
        />

        <Button size={'large'}>Save</Button>
      </S.Form>
    </S.Wrapper>
  );
}
