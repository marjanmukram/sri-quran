import React from 'react';
import Result from './result-body/Result';

import LangDrop from './result-body/LangDrop';

class Results extends React.Component {
  state = {
    lns: ['en'],
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
          }
        ]
      }
    ]
  };

  toggleAllLngResult = (id, lnCode) => {
    const tempLns = [...this.state.lns];
    const lnIndex = this.state.lns.indexOf(lnCode);
    let forceTo = 'remove';
    if (lnIndex === -1) {
      forceTo = 'add';
      tempLns.push(lnCode);
    } else {
      tempLns.splice(lnIndex, 1);
    }
    this.state.resBody.forEach(res =>
      this.toggleSingleLngResult(res.id, lnCode, forceTo)
    );
    this.setState({ lns: tempLns });
  };

  toggleSingleLngResult = (id, lnCode, forceTo) => {
    const tempRes = [...this.state.resBody];
    const ver = tempRes.find(v => v.id === id);
    const lnVer = ver.verses.find(v => v.ln === lnCode);
    if (lnVer) {
      if (forceTo === 'add') return;
      const verIndex = tempRes.indexOf(ver);
      const lnVerIndex = ver.verses.indexOf(lnVer);
      tempRes[verIndex].verses.splice(lnVerIndex, 1);
    } else {
      if (forceTo === 'remove') return;
      const gotFromApi = {
        ln: lnCode,
        verse:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eligendi illo fugit doloremque laboriosam quibusdam ipsa veritatis ut ratione libero officiis debitis ullam nulla eaque. Ullam, ex. Itaque, delectus quam.'
      };
      ver.verses.push(gotFromApi);
    }
    this.setState({ resBody: tempRes });
  };

  renderResNav() {
    return (
      <div className="navbar bg-light navbar-light navbar-expand-sm">
        <div className="container-fluid">
          <div className="navbar-nav">
            <div className="nav-item mn-ln border p-0 btn btn-sm btn-block mr-2 mb-1">
              <LangDrop
                lns={this.state.lns}
                clicked={this.toggleAllLngResult}
              />
            </div>
            <div className="nav-item form-inline">
              <audio src="./mp3" />
              <select
                name="recitator"
                id="recitator"
                className="custom-select custom-select-sm"
              >
                <option value="Alafasy" disabled={true}>
                  Choose recitator
                </option>
                <option value="ElGhamidi">Saad El Galmidi</option>
                <option value="Soudais">Abderrahman Al Soudais</option>
                <option value="Alafasy">Mishary Rashid Al-Afassy</option>
                <option value="Al-Ajmy">Ahmad Al-Ajmy</option>
                <option value="Al-Hussary">Al-Hussary</option>
                <option value="Basfar">Abdallah Ali Basfar</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { resHead, resBody } = this.state;
    // const { ln, sw } = this.props.match.params;
    return (
      <div className="container-fluid">
        <div className="card my-3">
          <div className="card-header text-center text-info">
            Your request is <b>'{resHead.sw}'</b> in chapter{' '}
            <b>
              '{resHead.chapter}'[{resHead.verOne}-{resHead.verTwo}]
            </b>{' '}
            in <b>'{resHead.ln}'</b> quran translation
          </div>
          {this.renderResNav()}
          <div className="card-body">
            {resBody.map(r => (
              <Result
                id={r.id}
                ver={r}
                key={r.id}
                toggleSingleLngResult={this.toggleSingleLngResult}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
