import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import {
    additionalInsurances,
    dentalInsurances,
    insuranceRisks,
    insurances,
    paymentFrequencies
} from '@/constants/insuranceOptions';

export const useInsuranceDataStore = defineStore('insuranceData', () => {
    const insuranceData = reactive({
        baseInsurance: '',
        paymentTerm: 'yearly',
        risk: '385',
        additionalInsurance: '0',
        dentalInsurance: '0'
    });
    const chosenInsurances = computed(() => {
        return {
            baseInsurance: insurances.find(
                insurance => insurance.id === insuranceData.baseInsurance
            ) || { name: '', price: 0 },
            paymentTerm: paymentFrequencies.find(
                frequency => frequency.id === insuranceData.paymentTerm
            ),
            risk: insuranceRisks.find(risk => risk.id === insuranceData.risk),
            additionalInsurance: additionalInsurances.find(
                insurance => insurance.id === insuranceData.additionalInsurance
            ),
            dentalInsurances: dentalInsurances.find(
                insurance => insurance.id === insuranceData.dentalInsurance
            )
        };
    });
    const totalPremium = computed(() => {
        const selection = chosenInsurances.value;
        const premiums = {
            basePremium: selection.baseInsurance!.price || 0,
            riskDiscount: selection.risk!.discount || 0,
            additionalPremium: selection.additionalInsurance!.price || 0,
            dentalPremium: selection.dentalInsurances!.price || 0
        };
        return (
            premiums.basePremium -
            premiums.riskDiscount +
            premiums.additionalPremium +
            premiums.dentalPremium
        );
    });
    return { insuranceData, chosenInsurances, totalPremium };
});
