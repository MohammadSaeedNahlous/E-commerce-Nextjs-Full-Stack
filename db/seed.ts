import { prisma } from './prisma';
import sampleData from './sample-data';

async function main() {
  await prisma.product.deleteMany();
  // Insert sample data
  await prisma.product.createMany({
    data: sampleData.products,
  });

  // Log success message
  console.log('Database seeded successfully.');
}

// execute the main function
main();
