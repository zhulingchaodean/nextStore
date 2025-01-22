import { PrismaClient } from '@prisma/client';
import sampleData from './simple-data';

async function main() {
   const prisma = new PrismaClient(); 
   await prisma.product.deleteMany();

   await prisma.product.createMany({
        data:sampleData.products
   })
   console.log('database seed successfully');
}

main();