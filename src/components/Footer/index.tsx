import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
   {/* <Logo color="black"/> */}
   Logo
   <S.Content>
     <S.Column>
       <Heading color="black" size="small" lineBottom lineColor="secondary">Contato</Heading>
       <nav aria-labelledby="contact">
       <a href="mailto:emailDaSaboaria">contato@arteemsaboaria.com</a>
       <a href="tel:+4733378901">+55 9 9999 9999</a>
       </nav>
     </S.Column>

     <S.Column>
       <Heading color="black" size="small" lineBottom lineColor="secondary">Nossas redes</Heading>
      <nav aria-labelledby="social media">
      <a href="#" target="_blank" rel="noopenner, noreferrer">Instagram</a>
      <a href="#" target="_blank" rel="noopenner, noreferrer">Facebook</a>
      <a href="#" target="_blank" rel="noopenner, noreferrer">Youtube</a>
      </nav>
     </S.Column>

     <S.Column>
       <Heading color="black" size="small" lineBottom lineColor="secondary">Links</Heading>
      <nav aria-labelledby="social media">
      <Link href="/">
        <a >Inicio</a>
      </Link>
      <Link href="/store">
        <a >Loja</a>
      </Link>
      <Link href="/search">
        <a >Buscar</a>
      </Link>
      </nav>
     </S.Column>

     <S.Column>
       <Heading color="black" size="small" lineBottom lineColor="secondary">Localização</Heading>
     <span>Lorem ipsum, dolor sit</span>
     <span>Lorem ipsum</span>
     <span>Lorem ipsum, dolor</span>
     </S.Column>
   </S.Content>

   <S.Copyright>LivSun Developers 2021 All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
