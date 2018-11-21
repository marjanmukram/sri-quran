const initState = {
  languages: [
    { codeName: 'ar', name: 'Arabic' },
    { codeName: 'en', name: 'English' },
    { codeName: 'si', name: 'Sinhala' },
    { codeName: 'ta', name: 'Tamil' }
  ]
};

export default function(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
