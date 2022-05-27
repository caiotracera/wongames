import { Email, Lock } from '@styled-icons/material-outlined';
import Link from 'next/link';

import { TextField } from '@/components/TextField';
import { Button } from '@/components/Button';

import * as S from '@/components/FormSignIn/styles';

export function FormSignIn() {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <S.ForgotPassword href="">Forgot your password?</S.ForgotPassword>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
        <S.FormLink>
          Don&apos;t have and account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
}
