import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/home/HomePage';
import Counter from './pages/counter/Counter';
import Products from './pages/products/Products';
import TodoList from './pages/todolist/TodoList';
import Users from './pages/users/Users';
import NotFound from "./components/layout/NotFound"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<Counter />} />
            <Route path="products" element={<Products />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
