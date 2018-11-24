import React from 'react';
import ChapterBox from './ChapterBox';

const ChapterList = ({ chapters }) => {
  return (
    <React.Fragment>
      {chapters.map(chapter => (
        <ChapterBox key={chapter.id} chapter={chapter} />
      ))}
    </React.Fragment>
  );
};

export default ChapterList;
