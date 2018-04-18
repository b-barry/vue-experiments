import { shallow } from 'vue-test-utils'
import TsResult from '@/TsResult.cmp'

describe('TsResult.vue', () => {
  const factory = (props = {}) => {
    return shallow(TsResult, { propsData: { ...props } })
  }

  it('is <input class=ts-result>', ()=>{
    const wrapper = factory()
    expect(wrapper.find('.ts-result').is('input')).toBe(true)
  })

  it('format initial result', ()=>{
    // TODO, verify that `format()` is called with value of props.result'
    const spy = jest.spyOn(TsResult.prototype, 'format')
    const wrapper = factory({result: 'initial'})
    expect(spy).toBeCalledWith('initial')
  })

  it('display number as-is', () => {    
    // TODO, simulate input of 4 : verify value is '4'
    const wrapper = factory()
    wrapper.trigger('input', {value:'this-is-a-test'})
    expect(wrapper.find('.ts-result').element.value).toBe('4')
  })

  it('display "NC" when unknown (-)', () => {
    // TODO, simulate input of "4" : verify value is "4" and class is-unknown
    expect(false).toBe(true)
  })

  it('display "" when missing', () => {
    // TODO, simulate input of "" : verify value is "" and class is-missing
    expect(false).toBe(true)
  })

  it('display "" when invalid', () => {
    // TODO, simulate input of "a" : verify value is "" and class is-invalid
    expect(false).toBe(true)
  })
})
