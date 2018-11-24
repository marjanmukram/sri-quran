import React from 'react';
import { Link } from 'react-router-dom';

const ChapterBox = ({ chapter: { id, name, verseCount } }) => {
  return (
    <Link
      to={`/chapters/${name
        .toLowerCase()
        .split(' ')
        .join('-')}/${id}`}
      className="col-sm-6 col-md-4 col-lg-3 p-2"
    >
      <div className="m-1 border p-2 rounded">
        <h5>{name}</h5>
        <span className="badge badge-info">{id} chapter</span>
        <span className="badge badge-info">{verseCount} verses</span>
      </div>
    </Link>
  );
};

export default ChapterBox;
