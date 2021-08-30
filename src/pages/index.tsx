import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import { items as itemsMock } from 'components/ItemCardSlider/mock'
import highligthMock from 'components/Highligth/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newItems: itemsMock,
      bestSellersHightLight: highligthMock,
      bestSellerItem: itemsMock
      // Colocar props do Blog e Nossas Redes
    }
  }
}
