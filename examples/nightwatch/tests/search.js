module.exports = {
  '@tags': ['home'],
  'Search an adress': function(client) {
      client.page.home()
          .navigate()
          .waitForElementPresent('@searchInput', 5000)
          .setValue('@searchInput', 'boulevard')
          .waitForElementPresent('@firstResult', 5000)
  },
  'Click on a suggestion': function(client) {
    client.page.home()
      .click('@firstResult')
      client.pause(500)
      client.expect.element('@firstResult').to.be.not.present
      client.end();
    }
};
