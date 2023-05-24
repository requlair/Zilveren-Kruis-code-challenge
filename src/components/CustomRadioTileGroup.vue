<template>
    <div class="input__group">
        <label class="input__title"> {{ inputLabel }}</label>
        <div class="form-row">
            <div
                v-for="value in values"
                :key="value.id"
                class="radio__tile"
                :class="{ 'radio__tile--choice': value.mostChosen }"
            >
                <div v-if="value.mostChosen" class="badge radio__tile-badge">
                    Meest gekozen
                </div>
                <div class="radio custom-radio radio__option">
                    <input
                        :value="value.id"
                        type="radio"
                        :name="name"
                        :id="`radio-insurance-${value.id}`"
                        @input="updateValue"
                        class="radio__input custom-control-input"
                    />
                    <label
                        :for="`radio-insurance-${value.id}`"
                        class="radio__label custom-control-label"
                    >
                        <p class="radio__description">
                            {{ value.name }}
                        </p>
                        <p class="radio__price">
                            € {{ value.price.toLocaleString('NL-nl') }} per jaar
                        </p>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    values: {
        id: string;
        mostChosen: boolean;
        name: string;
        price: number;
    }[];
    inputLabel: string;
    name: string;
    modelValue: string;
}>();
const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>
