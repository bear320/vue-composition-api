<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="dark-theme">
                <input type="checkbox" id="dark-theme" v-model="showDarkModal" />
                Show dark modals?
            </label>
        </div>
        <button @click="showModal = true">Show modal</button>
        <component v-model="showModal" :is="showDarkModal ? DarkModal : Modal" title="My modal title (via prop)">
            <!-- <template #title>My modal title (via slot)</template> -->
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis quas eos architecto
                accusantium ipsam maiores doloribus molestias saepe eaque!
            </p>
        </component>
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import DarkModal from "@/components/DarkModal.vue";

// modals
const showDarkModal = ref(false);
const showModal = ref(false);
</script>
