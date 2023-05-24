import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const usePersonalDataStore = defineStore('personalData', () => {
    const personalData = reactive({
        reason: '',
        firstname: '',
        infix: '',
        surname: '',
        gender: '',
        birthDate: '',
        serviceNumber: ''
    });
    function updateValue(id: keyof typeof personalData, value: string) {
        personalData[id] = value;
    }
    return { personalData, updateValue };
});
