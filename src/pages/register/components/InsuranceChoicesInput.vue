<template>
    <h2 class="mt-5">Verzekering</h2>
    <div class="form-group">
        <h3>Basisverzekering</h3>
        <p>
            In Nederland is de basisverzekering verplicht. Iedereen wordt voor
            de basisverzekering geaccepteerd. De overheid bepaalt welke zorg
            hierin zit en dit is dus bij elke verzekeraar hetzelfde.
        </p>
        <CustomRadioTileGroup
            v-model="insuranceData.baseInsurance"
            :values="insurances"
            input-label="Basisverzekering"
            name="radio-insurance"
        />
        <CustomDropdownInput
            v-model="insuranceData.paymentTerm"
            input-label="Kies je betaaltermijn"
            :values="paymentFrequencies"
        />
        <CustomDropdownInput
            v-model="insuranceData.risk"
            input-label="Kies de hoogte van het eigen risico"
            :values="insuranceRisks"
        />
    </div>
    <div class="form-group">
        <h3>Aanvullende verzekering</h3>
        <p>
            Onze aanvullende verzekeringen kennen ruim 100 verschillende
            vergoedingen. De hoogte van de vergoeding verschilt per
            pakket.hoogte van de vergoeding verschilt per pakket
        </p>
        <CustomDropdownInput
            v-model="insuranceData.additionalInsurance"
            input-label="Kies uw aanvullende verzekering"
            :values="additionalInsurances"
        />
    </div>
    <div class="form-group">
        <CustomDropdownInput
            v-model="insuranceData.dentalInsurance"
            input-label="Kies uw tandartsverzekering"
            :values="dentalInsurances"
        />
    </div>
</template>
<script setup lang="ts">
import CustomDropdownInput from '@/components/CustomDropdownInput.vue';
import CustomRadioTileGroup from '@/components/CustomRadioTileGroup.vue';
import { useInsuranceDataStore } from '../../../stores/insuranceData';
import { storeToRefs } from 'pinia';
import {
    additionalInsurances,
    dentalInsurances,
    insuranceRisks,
    insurances,
    paymentFrequencies
} from '@/constants/insuranceOptions';

const { insuranceData } = storeToRefs(useInsuranceDataStore());
</script>
