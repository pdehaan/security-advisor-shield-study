const { Advisor } = require('./Advisor.js');

let Advise = null;

const variations = {
  'regular-sync-offer'() {
    Advise = new Advisor();
    Advise.start({ newOffer: false });
  },
  'new-features-sync-offer'() {
    Advise = new Advisor();
    Advise.start({ newOffer: true });
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
