import prismaClient from "../../prisma";

interface DetailRequest{
  order_id: string;
}

class DetailOrderSerivce{
  async execute({ order_id }: DetailRequest){

    const orders = await prismaClient.item.findMany({
      where:{
        order_id: order_id
      },
      include: {
        product: true,
        order: {
          select: {
            id: true,
            table: true, // Inclua explicitamente o campo table aqui
            name: true,
            draft: true,
            status: true,
          },
        },
      }
    })

    return orders;

  }
}

export { DetailOrderSerivce }