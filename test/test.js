const assert = require('chai').assert;
const Result = require('../test-app.js');

describe('Result test', function(){

    let recom = Result;

    it('check the name has valid name.', function(){
        assert.isString(recom.checklist(), 'string');
    })

    it('check for a name in list.', function(){
        let name= recom.checklist()
        assert.oneOf(name, recom.results)
    });
});
