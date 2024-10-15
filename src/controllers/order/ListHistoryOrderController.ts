import { Request, Response } from "express";
import { ListHistoryOrderService } from "../../services/order/ListHistoryOrderService";

class ListHistoryOrderController{
  async handle(req: Request, res: Response) {
    const listHistoryOrderService = new ListHistoryOrderService()

    const orders = await listHistoryOrderService.execute()

    return res.json(orders)
  }
}

export { ListHistoryOrderController }