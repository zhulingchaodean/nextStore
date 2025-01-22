"use server"

// import { PrismaClient } from '@prisma/client'
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';


export  async function getLatestProducts(){
    // const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take:LATEST_PRODUCTS_LIMIT,
        orderBy:{createAt:'desc'}
    });
    console.log(data);
    
    return convertToPlainObject(data);
}

export async function getProductBySlug(slug:string) {
    return prisma.product.findFirst({
        where:{
            slug
        }
    })
}