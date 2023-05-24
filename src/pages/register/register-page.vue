<template>
    <div>
        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>
                    <h2>Gegevens</h2>

                    <div class="form-group">
                        <h3>Reden van aanmelding</h3>
                        <CustomDropdownInput
                            :values="registerReasons"
                            input-label="Wat is de reden van uw aanvraag?"
                            v-model="reason"
                        />
                    </div>

                    <PersonalDataInput />
                    <InsuranceChoicesInput />
                    <CheckData />
                </div>
                <div class="col-4">
                    <div class="card card--filled-secondary h-auto">
                        <div class="card-body">
                            <div class="sf-contactblok-content">
                                <h3 class="mb-2">We staan voor je klaar</h3>
                                <p class="mb-5">
                                    Twijfel je? Heb je een vraag?
                                </p>
                                <div class="phonenumber mb-2">
                                    <a href="tel:0900 040 03 09">
                                        <span class="sr-only">
                                            Telefoonnummer
                                        </span>
                                        0900 040 03 09
                                    </a>
                                    <div class="popover__container ml-1">
                                        <button
                                            id="info-phone"
                                            type="button"
                                            class="btn popover__btn btn--popover btn-none"
                                        >
                                            <span class="sr-only">
                                                Informatie weergeven
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <small>
                                    Open op maandag t/m vrijdag van 08:00 tot
                                    17:00
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomDropdownInput from '@/components/CustomDropdownInput.vue';
import CheckData from '@/pages/register/components/checkData.vue';
import PersonalDataInput from '@/pages/register/components/PersonalDataInput.vue';
import InsuranceChoicesInput from '@/pages/register/components/InsuranceChoicesInput.vue';
import { ref } from 'vue';

const reason = ref('');

const registerReasons = [
    {
        id: 'new',
        text: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
        selected: false
    },
    {
        id: 'change',
        text: 'Overstappen per 1-1-2023 naar Zilveren Kruis',
        selected: true
    }
];
</script>
