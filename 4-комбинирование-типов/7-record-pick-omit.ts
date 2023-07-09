type Names = Record<string, number>;
type WellKnownBrands = 'apple' | 'lenovo' | 'samsung' | 'asus';
type BrandNames = Record<WellKnownBrands, string>;

const obj: BrandNames = {
  apple: 'USA',
  lenovo: 'Russia',
  samsung: 'Korea',
  asus: 'China'
}

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Pick выбирает
type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;

const todo1: SimpleTodo = {
  id: 'safaf',
  title: 'Pickle',
  completed: true
}

// Omit отсекает
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

type NewTodo = Pick<Todo, 'title' | 'description'>;

export {}