import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Highligth, { HighlightProps } from 'components/Highligth'
import { ItemCardProps } from 'components/ItemCard'
import ItemCardSlider from 'components/ItemCardSlider'
import Menu from 'components/Menu'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newItems: ItemCardProps[]
  bestSellersHightLight: HighlightProps
  bestSellerItem: ItemCardProps[]
  // Colocar a tipagem do Blog e Nossas Redes
}

const Home = ({
  banners,
  newItems,
  bestSellersHightLight,
  bestSellerItem
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Novidades
        </Heading>
        <ItemCardSlider items={newItems} />
      </Container>
    </S.SectionNews>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Mais Vendidos
      </Heading>
      <Highligth {...bestSellersHightLight} />
      <S.SectionBestSellers>
        <ItemCardSlider items={bestSellerItem} color="white" />
      </S.SectionBestSellers>
    </Container>

    {/* <Container>
      <Heading lineLeft lineColor="secondary">
        Blog
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Nosso Instagram
      </Heading>
      <h1>Foto</h1>
      <h1>Foto</h1>
      <h1>Foto</h1>
      <h1>Foto</h1>
      <h1>Foto</h1>
    </Container> */}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
