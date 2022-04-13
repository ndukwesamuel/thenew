import Hsection1 from '../Components/HomeSection/Hsection1'
import Hsection2 from '../Components/HomeSection/Hsection2'
import Hsection3 from '../Components/HomeSection/Hsection3'
import Hsection4 from '../Components/HomeSection/Hsection4'
import Hsection5 from '../Components/HomeSection/Hsection5'
import Hsection6 from '../Components/HomeSection/Hsection6'
import Hsection7 from '../Components/HomeSection/Hsection7'
import Hsection8 from '../Components/HomeSection/Hsection8'
import Hsection9 from '../Components/HomeSection/Hsection9'

import Footer from '../Components/Footer'
import Hsection11 from '../Components/HomeSection/Hsection11'
import Hang from '../Components/HomeSection/Hang'
import moblie_head from '../images/headline_ofaplat2v3-min.png'
import dex_head from '../images/headline_ofaplatV2-min.png'

import { MdOutlineHorizontalRule } from 'react-icons/md'
import Hsection10 from '../Components/HomeSection/Hsection10A'

const Home = () => {
  return (
    <>
      <div className="section_one">
        <div className="dex_img">
          <img className="img-fluid" src={dex_head} alt="" />
        </div>
        <div className="mob_img">
          <img className="img-fluid" src={moblie_head} alt="" />
        </div>

        <Hsection1 />
      </div>

      <div>
        <div className="other_Section">
          <Hsection2 />
          <Hsection3 />
          <Hsection4 />
          <Hsection5 />
          <Hsection6 />
        </div>

        <div className="other_Section">
          <Hsection7 />
          <Hsection8 />
        </div>

        <div className="other_Section">
          <Hsection9 />
        </div>

        <div className="other_Section">
          <Hsection10 />
        </div>

        <div className="other_Section">
          <Hsection11 />
          <Footer />
        </div>

        <Hang />
      </div>
    </>
  )
}

export default Home
