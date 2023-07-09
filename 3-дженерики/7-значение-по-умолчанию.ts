
interface AnyObject {
  [key: string]: unknown;
}

async function request<T = AnyObject>(url: string): Promise<T> {
  const response = await fetch(url);

  return response.json();
}

// const data = request('') as {a: 1}

interface Todo {
  id: string;
  completed: boolean;
  title: string;
}

const data = request<Todo>('');

export {}