/* 1. the modules needed to turn this into a STUDY */
const xutils = require('shield-studies-addon-utils');
const variationsMod = require('lib/variations');

/* 2. configuration / setup constants for the study.
 *  These are only ones needed, or supported
 */
const forSetup = {
  name: 'Security Advisor Test', // unique for Telemetry
  choices: Object.keys(variationsMod.variations), // names of branches.
  duration: 7,   // in days,
  surveyUrl: 'https://mozilla.org/',
};

// 3. Study Object (module singleton);
const ourConfig = xutils.xsetup(forSetup);
const thisStudy = new xutils.Study(ourConfig, variationsMod);

/* 4. usual bootstrap / jetpack main function */
function main(options, callback) { // eslint-disable-line no-unused-vars
  xutils.generateTelemetryIdIfNeeded().then(() => {
    xutils.handleStartup(options, thisStudy);
  });
}

function onUnload(reason) {
  xutils.handleOnUnload(reason, thisStudy);
}

/* 5. usual bootstrap addon exports */
exports.main = main;
exports.onUnload = onUnload;
