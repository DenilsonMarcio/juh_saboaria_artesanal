import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo />

        <div>
          <Heading size="huge">
            Shampoos e Sabonetes feitos com produtos naturais
          </Heading>
          <S.Subtitle>
            Arte em <strong>Saboaria Artesanal</strong>
          </S.Subtitle>
        </div>
        <S.Footer>
          <strong>LivSun Developers 2021</strong> &copy; Todos os Direitos
          Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
