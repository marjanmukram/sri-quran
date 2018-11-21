import React from 'react';
import homeImg from '../images/quran-image.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-4 py-5 mt-5 bg-light">
          <div className="col-sm-4">
            <img src={homeImg} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-8">
            <p>
              أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا
            </p>
            <p>
              "Do they not then reflect on the Quran? Nay, on the hearts there
              are locks."
            </p>
            <p>
              ඔවුන් අල්-කුර්ආනය ගැන අවධානය යොමු නොකරන්නේ ද ? නැතහොත් සිත් මත
              අගුල්ද?
            </p>
            <p>
              மேலும் அவர்கள் இந்தக் குர்ஆனை ஆராய்ந்து பார்க்க வேண்டாமா? அல்லது
              அவர்கள் இருதயங்கள் (இருக்கின்றனவே) அவற்றின் மீது பூட்டுப்
              போடப்பட்டு விட்டனவா?
            </p>
            <div className="text-right py-3">47-24</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
