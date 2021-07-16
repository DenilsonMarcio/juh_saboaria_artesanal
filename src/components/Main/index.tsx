import Logo from 'components/Logo'
import * as S from './styles'

const Main = ({
  title = 'Juju Soap',
  description = 'Arte em Saboaria Artesanal'
}) => (
  <S.Wrapper>
    <Logo/>
     <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
