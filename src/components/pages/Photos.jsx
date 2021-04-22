import { React } from 'react';

import img1 from '../../assets/photoPage/img1.jpg'
import img2 from '../../assets/photoPage/img2.jpg'
import img3 from '../../assets/photoPage/img3.jpg'
import img4 from '../../assets/photoPage/img4.jpg'
import img5 from '../../assets/photoPage/img5.jpg'
import img6 from '../../assets/photoPage/img6.jpg'

export const PhotoPage = () => {
  return (
    <div className='wrapper__photo'>
      <div className="photo__block">
        <img src={img1} alt="photo1"/>
      </div>
      <div className="photo__block">
        <img src={img2} alt="photo2"/>
      </div>
      <div className="photo__block">
        <img src={img3} alt="photo3"/>
      </div>
      <div className="photo__block">
        <img src={img4} alt="photo4"/>
      </div>
      <div className="photo__block">
        <img src={img5} alt="photo5"/>
      </div>
      <div className="photo__block">
        <img src={img6} alt="photo6"/>
      </div>
    </div>
  )
}