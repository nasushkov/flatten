const expect = require('chai').expect
const flatten = require('../index')

describe('flatten', () => {
    it('should throw TypeError, when called with something except array', () => {
        expect(flatten.bind(null, {})).to.throw(TypeError)
    })

    it('should return empty array, when called with empty array', () => {
        const result = flatten([])
        expect(result).to.be.empty
    })

    it('should return the same array, when called with flatten array', () => {
        const result = flatten([1, 2, 3])
        expect(result).to.deep.equal([1, 2, 3])
    })

    it('should return [1, 2, 3] when called with [1, [2], 3]', () => {
        const result = flatten([1, [2], 3])
        expect(result).to.deep.equal([1, 2, 3])
    })

    it('should ignore empty arrays as elements', () => {
        const result = flatten([1, [], 3])
        expect(result).to.deep.equal([1, 3])
    })

    it('should return [1, 2, 3, 4], when called with [1, [2, [3], 4]]', () => {
        const result = flatten([1, [2,, [3], 4]])
        expect(result).to.deep.equal([1, 2, 3, 4])
    })
})