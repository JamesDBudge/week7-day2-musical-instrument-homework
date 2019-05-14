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
  this.element.innerHTML = '';
  const familyName = document.createElement('h3')
  familyName.textContent = `${family.name}`
  this.element.appendChild(familyName)

  const familyInfo = document.createElement('p')
  familyInfo.textContent = `${family.description}`
  this.element.appendChild(familyInfo)

  const exampleHeader = document.createElement('h4')
  exampleHeader.textContent = "Instruments Include:"
  this.element.appendChild(exampleHeader)

  const instrumentList = document.createElement('ul')
  instrumentList.id = "list"
  this.element.appendChild(instrumentList)
  document.querySelector('#list')

  const instruments = family.instruments
  console.log(instruments);
  for (let instrument of instruments) {
    const listItem = document.createElement('li')
    listItem.textContent = `${instrument}`
    this.element.appendChild(listItem)
  }

};

module.exports = FamilyInfo
