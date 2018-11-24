import React from 'react';
import ChapterList from './ChapterList';

class Chapters extends React.Component {
  state = {
    chapters: [
      { id: 1, name: 'Al Fathiha', verseCount: 7 },
      { id: 2, name: 'Al Bakara', verseCount: 286 },
      { id: 3, name: 'Al Fathiha', verseCount: 100 }
    ]
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="card my-3">
          <div className="card-header">
            <h3>Chapters In Holy Quran</h3>
          </div>
          <div className="card-body">
            <div className="row chapters">
              <ChapterList chapters={this.state.chapters} />
              {/* <Switch>
                <Route
                  exact
                  path="/chapters"
                  component={props => (
                    <ChapterList {...props} chapters={this.state.chapters} />
                  )}
                />
                <Route exact path="/chapters/:name/:id" component={Results} />
              </Switch> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chapters;
