<template>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <CustomInput
            type="text"
            v-model="personalData.firstname"
            input-label="Naam"
        />
        <CustomInput
            type="text"
            v-model="personalData.infix"
            input-label="Tussenvoegsels"
        />
        <CustomInput
            type="text"
            v-model="personalData.surname"
            input-label="Achternaam"
        />
        <CustomRadioButtonGroup
            v-model="personalData.gender"
            input-label="Geslacht"
            name="geslacht"
            :values="['man', 'vrouw']"
        />
        <CustomInput
            type="date"
            v-model="personalData.birthDate"
            input-label="Geboortedatum"
        />
        <CustomInput
            type="text"
            v-model="personalData.serviceNumber"
            input-label="Burgerservicenummer"
            :valid="
                isLength(personalData.serviceNumber, { min: 8, max: 9 }) &&
                isNumeric(personalData.serviceNumber)
            "
            error-text="Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw."
        />
    </div>
</template>
<script setup lang="ts">
import isLength from 'validator/es/lib/isLength';
import isNumeric from 'validator/es/lib/isNumeric';
import CustomInput from '../../../components/CustomTextInput.vue';
import CustomRadioButtonGroup from '../../../components/CustomRadioButtonGroup.vue';
import { usePersonalDataStore } from '@/stores/personalData';
import { storeToRefs } from 'pinia';

const { personalData } = storeToRefs(usePersonalDataStore());

</script>
