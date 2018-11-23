import React from 'react';
import Result from './Result';

class Results extends React.Component {
  state = {
    resHead: {
      ln: null,
      sw: '',
      chapter: '0',
      verOne: '0',
      verTwo: '0',
      resLen: 0,
      pageLen: 0,
      currentPage: 0
    },
    resBody: [
      {
        id: 1,
        chapId: 0,
        verId: 0,
        verses: [
          {
            ln: 'en',
            verse:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi illo fugit doloremque laboriosam quibusdam ipsa veritatis ut ratione libero officiis debitis ullam nulla eaque. Ullam, ex. Itaque, delectus quam.'
          },
          {
            ln: 'si',
            verse:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi illo fugit doloremque laboriosam quibusdam ipsa veritatis ut ratione libero officiis debitis ullam nulla eaque. Ullam, ex. Itaque, delectus quam.'
          }
        ]
      },
      {
        id: 2,
        chapId: 0,
        verId: 1,
        verses: [
          {
            ln: 'en',
            verse:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi illo fugit doloremque laboriosam quibusdam ipsa veritatis ut ratione libero officiis debitis ullam nulla eaque. Ullam, ex. Itaque, delectus quam.'
          },
          {
            ln: 'si',
            verse:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi illo fugit doloremque laboriosam quibusdam ipsa veritatis ut ratione libero officiis debitis ullam nulla eaque. Ullam, ex. Itaque, delectus quam.'
          }
        ]
      }
    ]
  };

  removeSingleLngResult = lnCode => {};

  render() {
    const { resHead, resBody } = this.state;
    // const { ln, sw } = this.props.match.params;
    return (
      <div className="container-fluid">
        {resBody.map(r => (
          <Result ver={r} key={r.id} />
        ))}
      </div>
    );
  }
}

export default Results;
