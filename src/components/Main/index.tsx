import * as S from './styles'

const Main = ({
  title = 'Juju Soap',
  description = 'Arte em Saboaria Artesanal'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.jpg"
      alt="Logo uma folha com o texto Juju Soap e um coração na direita"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
