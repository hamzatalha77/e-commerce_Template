import HomeSwiper from '../components/Home/HomeSwiper'
import Discount from '../components/Home/Discount'
import NewArrivals from '../components/Home/NewArrivals'
import Steps from '../components/Home/Steps'
import NewsLetter from '../components/Home/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <Discount />
      <NewArrivals />
      <Steps />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
