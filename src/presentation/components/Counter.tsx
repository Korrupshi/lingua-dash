import { useCounterStore } from "../../application/stores/testStore";

export const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};
