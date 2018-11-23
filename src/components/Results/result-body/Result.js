import React from 'react';

import SMediaShare from './SMediaShare';
import LangDrop from './LangDrop';
import PlayAudio from './PlayAudio';

const Result = ({
  id,
  ver: { chapId, verId, verses },
  toggleSingleLngResult
}) => {
  return (
    <div className="card p-2 my-1 border-0 bg-light">
      <div className="row">
        <div className="col-sm-2">
          <div className="opt-btns">
            <PlayAudio />
            <LangDrop
              id={id}
              lns={verses.map(ver => ver.ln)}
              clicked={toggleSingleLngResult}
            />
            <SMediaShare />
          </div>
          {chapId} - {verId}
        </div>
        <div className="col-sm-10">
          {verses.map(({ ln, verse }) => (
            <p className={ln} key={ln}>
              {verse}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
