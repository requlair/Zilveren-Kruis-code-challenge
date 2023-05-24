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

        <!-- FOOTER -->
        <div class="ratingbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <a
                            href="https://www.independer.nl/zorgverzekering/fi/zilveren-kruis-ac.aspx"
                            class=""
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src="https://www.zilverenkruis.nl/-/media/zilverenkruis/images/shared/independer.png?rev=bb0602912ded4b16adc221025f3fc010&amp;h=80&amp;w=80&amp;la=nl-NL&amp;hash=39DBF59680B0FEECA97C6C786FC7DE67"
                                class="ratingbar__icon"
                                alt="Independer"
                                title="Independer"
                            />
                        </a>
                        <span>
                            <span class="ratingbar__ratings-number"> 7,8 </span>
                            <span class="ratingbar__ratings-text">
                                op Independer
                            </span>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <span>
                            <span class="ratingbar__ratings-number">
                                3,8 miljoen
                            </span>
                            <span class="ratingbar__ratings-text">
                                klanten gingen u voor
                            </span>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 ratingbar__rating">
                        <a
                            href="/consumenten/service/declareren/zilveren-kruis-app"
                            class=""
                        >
                            <img
                                src="https://www.zilverenkruis.nl/-/media/zilverenkruis/images/app-logo/app_icon.png?rev=8665a8133399403b92b34eaada19bd46&amp;h=80&amp;w=80&amp;la=nl-NL&amp;hash=70AB973D0AB046A6EFA670CB38F2BF2E"
                                class="ratingbar__icon"
                                alt="Logo Zilveren Kruis-app"
                            />
                        </a>
                        <span>
                            <span class="ratingbar__ratings-number"> 4,5 </span>
                            <span class="ratingbar__ratings-text">
                                beoordeling in App Store
                            </span>
                        </span>
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
