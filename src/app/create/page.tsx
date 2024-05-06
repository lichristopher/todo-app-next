import prisma from '@/utils/db';
export default async function CreatePage() {
  async function deleteAll() {
    'use server';
    const deleted = await prisma.todo.deleteMany();
    console.log(deleted);
  }
  async function create() {
    'use server';
    const newTodos = await prisma.todo.createMany({
      data: [
        { content: 'Task 1 content' },
        { content: 'Task 2 content' },
        { content: 'Task 3 content' },
      ],
      // Skip duplicate checking for UUIDs
      skipDuplicates: true,
    });
  }
  // const newTodos = await prisma.todo.createMany({
  //   data: [
  //     { content: 'Task 1 content' },
  //     { content: 'Task 2 content' },
  //     { content: 'Task 3 content' },
  //   ],
  //   // Skip duplicate checking for UUIDs
  //   skipDuplicates: true,
  // });
  return (
    <div>
      CreatePage
      <form action={deleteAll}>
        <button>Delete All</button>
      </form>
      <form action={create}>
        <button>Create </button>
      </form>
    </div>
  );
}
