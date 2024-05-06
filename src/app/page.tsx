import prisma from '@/utils/db';
export default async function Home() {
  const todos = await prisma.todo.findMany();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </div>
  );
}
