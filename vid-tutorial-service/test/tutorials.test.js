const getTutorial = require('./../lib/service/getTutorial');
const getTutorials = require('./../lib/service/getTutorials');
const getTutorialsByTags = require('./../lib/service/getTutorialsByTags');
const getTutorialsBySearchTerm = require('./../lib/service/getTutorialsBySearchTerm');
const getTags = require('./../lib/service/getTags');
const data = require('./tutorial.data.json')

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect
const assertArrays = require('chai-arrays');
chai.use(assertArrays);


describe('Tutorials', () => {

    it('returns no video', () => {
        expect(getTutorial('', data)).to.be.undefined;
    });

    it('returns a video record', () => {
        expect((getTutorial('b1420dfe-d1c2-493f-925f-f23c81c28109', data), 1)).to.not.be.undefined;
    });

    it('returns required tags', () => {
        const tags = getTags(data);
        expect(tags).to.be.containingAllOf([
            'Engaging',  'Interactive',
            'Easy',      'Exciting',
            'Moving',    'Energetic',
            'Exploring', 'Medium',
            'Hard',      'Calming'
          ]);
    });

    it('returns no tagged tutorials', () => {
        const tutorials1 = getTutorialsByTags('cricket', data);
        expect(tutorials1).to.be.ofSize(0);

        const tutorials2 = getTutorialsByTags(['cricket', 'calculus'], data);
        expect(tutorials2).to.be.ofSize(0);

        const tutorials3 = getTutorialsByTags('cricket calculus', data);
        expect(tutorials3).to.be.ofSize(0);

        const tutorials4 = getTutorialsByTags('', data);
        expect(tutorials4).to.be.ofSize(0);

        const tutorials5 = getTutorialsByTags([], data);
        expect(tutorials5).to.be.ofSize(0);
    });

    it('returns tagged tutorials', () => {
        const tutorials1 = getTutorialsByTags('Moving', data);
        expect(tutorials1).not.to.be.ofSize(0);

        const tutorials2 = getTutorialsByTags(['Moving', 'hard'], data);
        expect(tutorials2).not.to.be.ofSize(0);

        const tutorials3 = getTutorialsByTags('moving Hard', data);
        expect(tutorials3).not.to.be.ofSize(0);
    });

    it('returns empty search for tutorials', () => {
        const tutorials1 = getTutorialsBySearchTerm('cricket', data);
        expect(tutorials1).to.be.ofSize(0);

        const tutorials2 = getTutorialsBySearchTerm(['cricket', 'clarke'], data);
        expect(tutorials2).to.be.ofSize(0);

        const tutorials3 = getTutorialsBySearchTerm('cricket clarke', data);
        expect(tutorials3).to.be.ofSize(0);

        const tutorials4 = getTutorialsBySearchTerm('', data);
        expect(tutorials4).to.be.ofSize(0);

        const tutorials5 = getTutorialsBySearchTerm([], data);
        expect(tutorials5).to.be.ofSize(0);
    });

    it('returns search term tutorials', () => {
        const tutorials1 = getTutorialsBySearchTerm('Animals', data);
        expect(tutorials1).not.to.be.ofSize(0);

        const tutorials2 = getTutorialsBySearchTerm(['Interactive', 'graham', 'Animals'], data);
        expect(tutorials2).not.to.be.ofSize(0);

        const tutorials3 = getTutorialsBySearchTerm('moving Hard dave Places', data);
        expect(tutorials3).not.to.be.ofSize(0);
    });

});
