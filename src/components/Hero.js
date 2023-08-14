import himg1 from '../content/eberhard-grossgasteiger-LmqySFs3TQQ-unsplash.jpg'
import himg2 from '../content/brad-fickeisen-hW-422SNyK4-unsplash.jpg'
import himg3 from '../content/izuddin-helmi-adnan-UalPm9GYtow-unsplash.jpg'
import himg4 from '../content/jeremy-bishop-b_Iz9tkrw6A-unsplash.jpg'
import himg5 from '../content/michael-d-rnKqWvO80Y4-unsplash.jpg'
import himg6 from '../content/oliver-sjostrom-epRVcpr6yf8-unsplash.jpg'
import himg7 from '../content/roberto-h-qToVxSYXPYU-unsplash.jpg'
import himg8 from '../content/taylor-keeran-yeoroee5UQA-unsplash.jpg'
import himg9 from '../content/wong-zihoo-DBtgQI-9XdM-unsplash.jpg'


export default function Hero() {
    return (
        <div className='himgContainer'>
            <img className='himg1' src={himg1} alt='heroimage1'/>
            <img className='himg2' src={himg2} alt='heroimage2'/>
            <img className='himg3' src={himg3} alt='heroimage3'/>
            <img className='himg4' src={himg4} alt='heroimage4'/>
            <img className='himg5' src={himg5} alt='heroimage5'/>
            <img className='himg6' src={himg6} alt='heroimage6'/>
            <img className='himg7' src={himg7} alt='heroimage7'/>
            <img className='himg8' src={himg8} alt='heroimage8'/>
            <img className='himg9' src={himg9} alt='heroimage9'/>
        </div>
    )
}

