import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
        count: 0,
        title: "My Counter Title",
    }),
    getters: {
        oddOrEven: (state) => {
            if (state.count % 2 === 0) return "even";
            return "odd";
        },
    },
    actions: {
        increase(num) {
            this.count += num;
        },
        decrease(num) {
            this.count -= num;
        },
    },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
