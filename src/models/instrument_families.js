const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  // console.log(this.data)
  PubSub.publish('Families:allFamiliesReady', this.data);

  PubSub.subscribe('FamilySelect:change', (event) => {
    const selectedInstrument = event.detail;
    this.publishFamilyDetail(selectedInstrument);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function (selectedInstrument) {
  const selectedFamily = this.data[selectedInstrument]
  PubSub.publish('SelectedFamily:ready', selectedFamily)
};

module.exports = InstrumentFamilies;
