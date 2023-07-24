import { Request, Response } from 'express';
import { getStoreService } from '../services/getStoreService';
import { deleteStoreService } from '../services/deleteStoreService';
sdfsdff
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
sdfsd
    const store = await getStoreService.findOne(id);

    if (!store) {
      return res.status(404).json({ error: 'Not found' });
    }
fdsdfs
    await deleteStoreService.delete(id);

    return res.status(200).json({ status: true });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'InternalServerError' });
  }
}
