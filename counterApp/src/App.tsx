import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, decrement } from "./features/counter/counterSlice";
import { useQueryQuery } from "./features/dog-API/dogApiSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const { data = [] } = useQueryQuery();

  if (data) {
    return (
      <>
        <div>
          <h1>Number of Dogs fetched: {data.length}</h1>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Image</td>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => {
                return (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={breed.image.url}
                        alt={breed.name}
                        height={250}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={handleIncrement}>Increment</button>
          <h1>{count}</h1>
          <button onClick={handleDecrement}>Decrement</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }

  return null;
}

export default App;
