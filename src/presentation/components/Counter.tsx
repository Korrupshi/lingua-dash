import React from "react";
import { StudyData } from "../../domain/models/StudyData";
import { useCounterStore } from "../../application/store";

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

// export function Counter() {
//   const studyData: StudyData[] = useAppSelector((state) => state.study.value);
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{studyData[0].readMin}m</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
