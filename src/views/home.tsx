import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const store = useStore();
    const { counter, name } = storeToRefs(store);
    return {
      counter,
      name,
    };
  },
  render() {
    return (
      <>
        <h1>Hello {this.name} ~</h1>
        <p>your counter: {this.counter}</p>
        <button onClick={() => (this.counter += 1)}>+</button>
        <button onClick={() => (this.counter -= 1)}>-</button>
      </>
    );
  },
});
