<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title"> {{ inputLabel }}</label>
            <div class="form-row">
                <div
                    class="radio custom-radio radio__option"
                    v-for="value in values"
                    :key="value"
                >
                    <input
                        :id="value"
                        class="radio__input custom-control-input"
                        type="radio"
                        :name="name"
                        :value="value"
                        @input="updateValue"
                    />
                    <label
                        class="radio__label custom-control-label"
                        :for="value"
                    >
                        {{ value }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    inputLabel: string;
    values: string[];
    name: string;
    modelValue: string;
}>();
const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>
