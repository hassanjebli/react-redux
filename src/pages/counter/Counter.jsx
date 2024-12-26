import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/actions/counterActions';
import { PlusCircle, MinusCircle } from 'lucide-react';

const Counter = () => {
  const { counter } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="w-full max-w-md bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Interactive Counter</h2>
        
        {/* Counter Display */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-100 rounded-lg transform -rotate-2"></div>
          <div className="relative bg-white rounded-lg shadow-sm p-6 text-center">
            <span className="text-5xl font-bold text-blue-600 tabular-nums">
              {counter}
            </span>
            <p className="text-gray-500 mt-2">Current Count</p>
          </div>
        </div>

        {/* Input and Controls */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="number"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-center text-lg"
              placeholder="Enter value"
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="text-gray-400">#</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              onClick={() => dispatch(decrement(value))}
            >
              <MinusCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Decrease
            </button>

            <button
              className="flex items-center justify-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              onClick={() => dispatch(increment(Number(value)))}
            >
              <PlusCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;