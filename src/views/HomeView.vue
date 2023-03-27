<template>
    <div class="home">
        <h2 ref="titleRef">{{ title }}</h2>

        <h3>{{ counterData.title }}:</h3>

        <div>
            <button @click="decrease(2)" class="btn">--</button>
            <button @click="decrease(1)" class="btn">-</button>
            <span class="counter">{{ counterData.count }}</span>
            <button @click="increase(1)" class="btn">+</button>
            <button @click="increase(2)" class="btn">++</button>
        </div>

        <p>This counter is {{ oddOrEven }}.</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input v-model="counterData.title" v-autofocus type="text" />
        </div>
    </div>
</template>

<script setup="">
// imports
import { ref, reactive, computed, watch, onMounted, nextTick } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

// title
const title = "My counter APP";

const titleRef = ref(null);

onMounted(() => {
    console.log(titleRef.value);
});

// counter
const counterData = reactive({
    count: 0,
    title: "Counter",
});

watch(
    () => counterData.count,
    (newCount) => {
        if (newCount === 20) alert("Way to go! You made it 20!");
    }
);

const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    return "odd";
});

const increase = async (amount) => {
    counterData.count += amount;
    await nextTick();
    console.log("Do something when counter has updated in the DOM.");
};

const decrease = (amount) => {
    counterData.count -= amount;
};
</script>

<style lang="scss" scoped>
.home {
    text-align: center;
    padding: 20px;

    div {
        .btn,
        .counter {
            font-size: 40px;
            margin: 10px;
        }
    }

    .edit {
        margin-top: 60px;

        input {
            text-align: center;
        }
    }
}
</style>
