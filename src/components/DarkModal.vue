<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal-dark">
            <!-- <h2><slot name="title" /></h2> -->
            <h2>{{ props.title }}</h2>
            <p>Hello @{{ userData.userName }}</p>
            <slot />
            <button @click="emit('update:modelValue', false)">Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
// imports
import { inject } from "vue";

// props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "No title specified.",
    },
});

// emits
const emit = defineEmits(["update:modelValue"]);

// user data
const userData = inject("userData");
</script>

<style lang="scss" scoped>
.modal-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #333;
    padding: 20px;
    z-index: 1;
}
</style>
