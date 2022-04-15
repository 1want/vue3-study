import { mount } from '@vue/test-utils'
// import { nextTick } from '@vue/composition-api'
import Hello from '../src/components/script-setup/index.vue'

// TODO: find out why
test.skip('mount component', () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    propsData: {
      count: 4
    }
  })
  const vm = wrapper.vm

  // 在控制台将其记录下来即可深度审阅包裹器
  // 我们对 Vue Test Utils 的探索也由此开始
  console.log(wrapper)

  // await nextTick()

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  // await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  // await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})
