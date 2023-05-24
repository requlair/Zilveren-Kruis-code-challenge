<template>
    <div class="form-group">
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> {{ inputLabel }} </label>
                <select class="form-control" @input="updateValue">
                    <option
                        v-for="value in values"
                        :key="value.text"
                        :selected="value.defaultSelected"
                        :value="value.id"
                    >
                        {{ value.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string;
    inputLabel: string;
    values: {
        id: string;
        defaultSelected?: boolean;
        text: string;
    }[];
}>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>
