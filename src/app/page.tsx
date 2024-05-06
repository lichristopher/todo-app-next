import prisma from '@/utils/db';
export const dynamic = 'force-dynamic';
interface Todo {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}
export default async function Home() {
  const todos: Todo[] = await prisma.todo.findMany();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </div>
  );
}
