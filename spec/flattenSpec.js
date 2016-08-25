import {expect} from 'chai'
import flatten from '../index'

describe('flatten', () => {
    it('should throw TypeException when called with something except array', () => {
        expect(flatten({})).to.throw(TypeError)
    })

    it('should return empty array when called with empty array', () => {
        expect(flatten([])).to.equal([])
    })
})