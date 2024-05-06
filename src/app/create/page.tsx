import prisma from '@/utils/db';
export default async function CreatePage() {
  const newTodos = await prisma.todo.createMany({
    data: [
      { content: 'Task 1 content' },
      { content: 'Task 2 content' },
      { content: 'Task 3 content' },
    ],
    // Skip duplicate checking for UUIDs
    skipDuplicates: true,
  });
  return <div>CreatePage</div>;
}
