const { Advisor } = require('./Advisor.js');
const simplePrefs = require('sdk/simple-prefs');

let Advise = null;

const variations = {
  'regular-sync-offer'() {
    Advise = new Advisor();
    Advise.start();
  },
  'new-features-sync-offer'() {
    simplePrefs.prefs.newFeaturesSyncOffer = true;
    Advise = new Advisor();
    Advise.start();
  },
  'observe-only'() {},
};

function isEligible() {
  return true;
}

function cleanup() {
  if (Advise) {
    Advise.destroy();
    Advise = null;
  }
}

module.exports = {
  isEligible,
  cleanup,
  variations,
};
