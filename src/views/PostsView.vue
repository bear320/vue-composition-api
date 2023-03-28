<template>
    <div class="posts">
        <h1>Posts</h1>

        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="`/postDetail/${post.id}`">{{ post.title }}</router-link>
            </li>
        </ul>

        <textarea v-autofocus></textarea>

        <div>
            <button
                :class="{ yellow: counter.oddOrEven === 'odd' }"
                @click="counter.increase(1)"
                class="counter-button"
            >
                {{ counter.count }}
            </button>
        </div>
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
// import { useCounter } from "../use/useCounter";
import { useCounterStore } from "@/stores/counter";
import { vAutofocus } from "@/directives/vAutofocus";

// posts
const posts = ref([
    {
        id: "id1",
        title: "Post 1",
    },
    {
        id: "id2",
        title: "Post 2",
    },
    {
        id: "id3",
        title: "Post 3",
    },
]);

// counter button
// const { counterData, oddOrEven, increase } = useCounter();
const counter = useCounterStore();
</script>

<style lang="scss" scoped>
.posts {
    ul {
        margin-bottom: 30px;
    }

    .counter-button {
        font-size: 60px;
        width: 100%;
        background-color: pink;

        &.yellow {
            background-color: beige;
        }
    }
}
</style>
