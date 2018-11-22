import React from 'react';

const context = React.createContext();

export class Provider extends React.Component {
  state = {
    languages: [
      { codeName: 'ar', name: 'Arabic' },
      { codeName: 'en', name: 'English' },
      { codeName: 'si', name: 'Sinhala' },
      { codeName: 'ta', name: 'Tamil' }
    ]
  };
  render() {
    return (
      <context.Provider value={this.state.languages}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
