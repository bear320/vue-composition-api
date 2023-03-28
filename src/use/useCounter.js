import { reactive, computed, watch, onMounted, nextTick } from "vue";

const counterData = reactive({
    count: 0,
    title: "Counter",
});

export function useCounter() {
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

    onMounted(() => {
        console.log("Do stuff related to Counter");
    });

    return {
        counterData,
        oddOrEven,
        increase,
        decrease,
    };
}
