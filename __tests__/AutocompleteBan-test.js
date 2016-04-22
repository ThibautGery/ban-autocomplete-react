jest.unmock('../src/AutocompleteBan.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AutocompleteBan from '../src/AutocompleteBan.jsx';

describe('AutocompleteBan', () => {
  let autocompleteBan;



  describe('at init', () => {
    beforeEach(() => {
      autocompleteBan = TestUtils.renderIntoDocument(
        <AutocompleteBan />
      );
    })

    it('create a div', () => {
      const autocompleteBanDom = ReactDOM.findDOMNode(autocompleteBan);
      expect(autocompleteBanDom.tagName).toEqual('DIV');
      expect(autocompleteBanDom.classList.length).toEqual(1);
      expect(autocompleteBanDom.classList[0]).toEqual('ban-search');
    })

    it('the input search is empty', () => {
      const autocompleteBanDom = ReactDOM.findDOMNode(autocompleteBan);
      const input = autocompleteBanDom.children[0]
      expect(input.tagName).toEqual('INPUT');
      expect(input.value).toEqual('');
      expect(input.classList[0]).toEqual('searchBox');
    })
  })
});
