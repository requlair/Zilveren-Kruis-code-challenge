<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ inputLabel }}</label>
            <input
                class="input__field form-control"
                :class="{ 'is-invalid': !valid && errorText }"
                :type="type"
                :value="modelValue"
                @input="updateValue"
            />
        </div>
        <div
            v-if="!valid && errorText"
            class="input__feedback invalid-feedback mt-1"
            aria-live="polite"
        >
            <span>{{ errorText }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    inputLabel: String,
    type: String,
    modelValue: String,
    valid: Boolean,
    errorText: String
});
const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>
