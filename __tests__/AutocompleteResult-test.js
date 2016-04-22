jest.unmock('../src/client/app/AutocompleteResult.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AutocompleteResult from '../src/client/app/AutocompleteResult.jsx';

describe('AutocompleteResult', () => {
  let autocompleteResult;
  let updateQuery;

  beforeEach(() => {
    updateQuery = jest.genMockFunction();
  })

  describe('without any result', () => {
    const results = []
    beforeEach(() => {
      autocompleteResult = TestUtils.renderIntoDocument(
        <AutocompleteResult results={ results } selectResult={ updateQuery } />
      );
    })

    it('create an empty response', () => {
      const autocompleteResultDom = ReactDOM.findDOMNode(autocompleteResult);
      expect(autocompleteResultDom.tagName).toEqual('UL');
      expect(autocompleteResultDom.children.length).toEqual(0);
    })
  })


  describe('with 2 results', () => {
    const results = [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.381415,
                    48.857022
                ]
            },
            "properties": {
                "citycode": "75111",
                "postcode": "75011",
                "name": "Boulevard Voltaire",
                "id": "id1",
                "context": "75, Île-de-France",
                "score": 0.8642727272727272,
                "label": "Boulevard Voltaire 75011 Paris",
                "city": "Paris",
                "type": "street"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    2.296068,
                    48.883612
                ]
            },
            "properties": {
                "citycode": "75117",
                "postcode": "75017",
                "name": "Boulevard Pereire",
                "id": "id2",
                "context": "75, Île-de-France",
                "score": 0.8641272727272727,
                "label": "Boulevard Pereire 75017 Paris",
                "city": "Paris",
                "type": "street"
            },
            "type": "Feature"
        }
    ]

    beforeEach(() => {
      autocompleteResult = TestUtils.renderIntoDocument(
        <AutocompleteResult results={ results } selectResult={ updateQuery } />
      );
    })

    it('prints 5 suggestions', () => {
      const autocompleteResultDom = ReactDOM.findDOMNode(autocompleteResult);
      expect(autocompleteResultDom.tagName).toEqual('UL');
      expect(autocompleteResultDom.children.length).toEqual(2);
    })

    describe('when clicking on the first option', () => {
      beforeEach(() => {
        const autocompleteResultDom = ReactDOM.findDOMNode(autocompleteResult);
        const firstLink = autocompleteResultDom.children[0].children[0]
        TestUtils.Simulate.click(firstLink);
      })

      it('call the "updateQuery" function with the id of the result', () => {
        expect(updateQuery.mock.calls.length).toEqual(1);
        expect(updateQuery).toBeCalledWith('id1');
      })
    })
  })
});
