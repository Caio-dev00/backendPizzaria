import prismaClient from "../../prisma";

class ListHistoryOrderService{
  async execute(){

    const orders = await prismaClient.order.findMany({
      where:{
        draft: false,
      },
      orderBy:{
        created_at: 'desc'
      }
    })

    return orders;

  }
}

export { ListHistoryOrderService }