import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/features/counterSlice";
import { useGetAllProductsQuery } from "./store/api/productsApi";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useGetAllProductsQuery();
  console.log(data?.products);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.error}</p>}
        {data && data.products.map((p) => <div key={p.id}>{p.title}</div>)}
      </div>
    </div>
  );
};

export default App;
