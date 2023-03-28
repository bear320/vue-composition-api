<template>
    <div class="home">
        <h2 ref="titleRef">{{ title }}</h2>

        <h3>{{ counter.title }}:</h3>

        <div>
            <button @click="counter.decrease(2)" class="btn">--</button>
            <button @click="counter.decrease(1)" class="btn">-</button>
            <span class="counter">{{ counter.count }}</span>
            <button @click="counter.increase(1)" class="btn">+</button>
            <button @click="counter.increase(2)" class="btn">++</button>
        </div>

        <p>This counter is {{ counter.oddOrEven }}.</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input v-model.trim="counter.title" v-autofocus type="text" />
        </div>
    </div>
</template>

<script setup="">
// imports
import { ref, onMounted } from "vue";
// import { useCounter } from "@/use/useCounter";
import { useCounterStore } from "@/stores/counter";
import { vAutofocus } from "@/directives/vAutofocus";

// title
const title = "My counter APP";

const titleRef = ref(null);

onMounted(() => {
    console.log(titleRef.value);
});

// counter
// const { counterData, oddOrEven, increase, decrease } = useCounter();
const counter = useCounterStore();
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
