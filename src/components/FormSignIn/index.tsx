import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <S.ForgetPassword href="#">Esqueci minha senha</S.ForgetPassword>

      <Button size="large" fullWidth>
        Entrar agora
      </Button>
      <S.FormLink>
        Não tem uma conta?{' '}
        <Link href="/sign-up">
          <a> criar aqui</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
