const PubSub = require('../helpers/pub_sub.js')

const FamilySelect = function(element){
  this.element = element;
};

FamilySelect.prototype.bindEvents = function(){
  PubSub.subscribe('Families:allFamiliesReady', (event) => {
    const allFamilies = event.detail;
    console.log(allFamilies);
    this.populate(allFamilies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('FamilySelect:change', selectedIndex);
  });
};

FamilySelect.prototype.populate = function (familyData) {
  familyData.forEach((family, index) => {
    const option = document.createElement('option')
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = FamilySelect
