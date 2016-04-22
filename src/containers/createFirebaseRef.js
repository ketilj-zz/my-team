import Firebase from 'firebase';

export default name => {
  const FIREBASE_URL = 'https://teamkom.firebaseio.com/';
  const exampleUrl = `${FIREBASE_URL}/${name}`;
  const demoRef = new Firebase(exampleUrl);

  console.info(`View your data at: ${FIREBASE_URL}`); // eslint-disable-line no-console

  return demoRef;
};
