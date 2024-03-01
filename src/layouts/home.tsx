import Cart from '../components/Cart'
import HomeSwiper from '../components/Home/HomeSwiper'
import Discount from '../components/Home/Discount'
import NewArrivals from '../components/Home/NewArrivals'
import Steps from '../components/Home/Steps'
import NewsLetter from '../components/Home/NewsLetter'

const Home = () => {
  return (
    <div>
      <Cart />
      <HomeSwiper />
      <Discount />
      <NewArrivals />
      <Steps />
      <NewsLetter />
    </div>
  )
}

export default Home
