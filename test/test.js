const assert = require('chai').assert;
const app = require('../test-app.js');

describe('Результат', function word(){
    it('Результат should return "Сайт-сервис"', function word(){
        assert.equal(app(),"Сайт-сервис");
    });
});
