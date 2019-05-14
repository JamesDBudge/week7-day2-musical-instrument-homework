const InstrumentFamilies = require('./models/instrument_families.js')
const instrumentFamilyData = require('./data/instrument_family_data.js')
const FamilySelect = require('./views/family_select.js')
const FamilyInfo = require('./views/family_info.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const familyDiv = document.querySelector('#instrument-families')
  const familyDropDown = new FamilySelect(familyDiv)
  familyDropDown.bindEvents()

  const infoDiv = document.querySelector('#body')
  const familyInfo = new FamilyInfo(infoDiv)
  familyInfo.bindEvents()

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData)
  // console.log(instrumentFamilyData);
  instrumentFamilies.bindEvents()

});
