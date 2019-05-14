const PubSub = require('../helpers/pub_sub.js')

const FamilyInfo = function (element) {
  this.element = element
}

FamilyInfo.prototype.bindEvents = function () {
  PubSub.subscribe('SelectedFamily:ready', (event) => {
    const family = event.detail
    console.log(family)
    this.render(family)
  })
};

FamilyInfo.prototype.render = function (family) {
    const familyName = document.createElement('h3')
    familyName.textContent = `${family.name}`
    this.element.appendChild(familyName)
    const familyInfo = document.createElement('p')
    familyInfo.textContent = `${family.description}`
    this.element.appendChild(familyInfo)
};

module.exports = FamilyInfo
