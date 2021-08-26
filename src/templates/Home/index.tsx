import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Highligth, { HighlightProps } from 'components/Highligth'
import ItemCard, { ItemCardProps } from 'components/ItemCard'
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
      <BannerSlider items={banners}/>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
      Novidades
      </Heading>
      <ItemCardSlider items={newItems} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Mais Vendidos
      </Heading>
      <Highligth {...bestSellersHightLight}/>
      <ItemCardSlider items={bestSellerItem} color="white"/>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Blog
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Nossas Redes
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
