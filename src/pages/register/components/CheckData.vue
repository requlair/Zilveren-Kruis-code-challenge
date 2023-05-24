<template>
    <h2 class="mt-5">Controleren</h2>
    <div class="form-group">
        <h3>Gekozen pakket</h3>
        <ul class="list--nostyle">
            <li>
                <strong>Basisverzekering:</strong>
                {{ chosenInsurances.baseInsurance.name }} - €
                {{
                    chosenInsurances.baseInsurance.price.toLocaleString('NL-nl')
                }}
                per jaar
            </li>
            <li>
                <strong>Betaaltermijn</strong>
                {{ chosenInsurances.paymentTerm?.text }}
            </li>
            <li>
                <strong>Eigen risico</strong> {{ chosenInsurances.risk?.text }}
            </li>
            <li>
                <strong>Aanvullende Verzekering</strong>
                {{ chosenInsurances.additionalInsurance?.text }}
            </li>
            <li>
                <strong>Tandartsverzekering</strong>
                {{ chosenInsurances.dentalInsurances?.text }}
            </li>
        </ul>
    </div>
    <div class="form-group">
        <h3>Totaalpremie</h3>
        <span>€ {{ totalPremium.toLocaleString('nl-NL') }} per jaar</span>
    </div>
    <div class="form-group">
        <h3>Adres en contactgegevens</h3>
        {{ personalData }}
    </div>
</template>
<script setup lang="ts">
import { usePersonalDataStore } from '@/stores/personalData';
import { useInsuranceDataStore } from '@/stores/insuranceData';
import { storeToRefs } from 'pinia';

const personalData = storeToRefs(usePersonalDataStore());
const { chosenInsurances, totalPremium } = storeToRefs(useInsuranceDataStore());
</script>
