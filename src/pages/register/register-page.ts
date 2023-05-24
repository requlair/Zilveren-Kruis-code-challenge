import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import registerPage from './register-page.vue';

describe('App.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(registerPage);

        expect(wrapper.element).toMatchSnapshot();
    });
});
