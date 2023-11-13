import { NextResponse } from "next/server";
import prisma from "@/app/libs/Prisma";

export async function GET(req, context) {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { id } = context.params;

    const product = await prisma.products.findFirst({
      where: { id: Number(id) },
    });

    const order = await prisma.orders.create({
      data: {
        user_id: iser?.id,
        stripe_id: body.stripe_id,
        name: body.name,
        address: body.address,
        zipcode: body.zipcode,
        city: body.country,
        total: Number(body.total),
      },
    });

    body.products.forEach(async (prod) => {
      await prisma.orderItem.create({
        data: {
          order_id: order.id,
          product_id: Number(prod.id),
        },
      });
    });

    await prisma.$disconnect();
    return NextResponse.json("Order Complete", { status: 200 });
  } catch (error) {
    console.log(error);
    await prisma.$disconnect;
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
