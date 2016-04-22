module.exports = {
    url() {
        return `${this.api.launchUrl}/`;
    },
    elements: {
        searchInput: 'input.searchBox',
        firstResult: '.results li a',
    }
};
