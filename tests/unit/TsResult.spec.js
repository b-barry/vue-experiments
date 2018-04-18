import TsResult from '@/TsResult.cmp'
import {shallow} from '@vue/test-utils'

describe('TsResult.vue', () => {
  const factory = (props = {}) => {
    return shallow(TsResult, {propsData: {...props}})
  }

  it('is <input class=ts-result>', () => {
    const wrapper = factory()
    expect(wrapper.find('.ts-result').is('input')).toBe(true)
  })

  it('format initial result', () => {
    // TODO, verify that `format()` is called with value of props.result'
    const wrapper = factory({result: 'initial'})
    // @Blaize: to get the vue instance, you should shallow the component first
    const spy = jest.spyOn(wrapper.vm, 'format')
    expect(spy).toBeCalledWith('initial')
  })
  //
  it('display number as-is', () => {
    // TODO, simulate input of 4 : verify value is '4'
    expect(false).toBe(true)
  })
  //
  it('display "NC" when unknown (-)', () => {
    // TODO, simulate input of "4" : verify value is "4" and class is-unknown
    // @Blaize : https://vue-test-utils.vuejs.org/en/api/wrapper/trigger.html
    const wrapper = factory()
    const input = wrapper.find('.ts-result');
    input.element.value = '-';
    input.trigger('input');
    expect(input.element.value).toBe('NC')
  })

  it('display "" when missing', () => {
    // TODO, simulate input of "" : verify value is "" and class is-missing
    expect(false).toBe(true)
  })
  //
  it('display "" when invalid', () => {
    // TODO, simulate input of "a" : verify value is "" and class is-invalid
    expect(false).toBe(true)
  })
})
