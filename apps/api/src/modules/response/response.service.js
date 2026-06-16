import { ResponseModel } from '../../models/Response.js';

export const getAll = async (_req, res) => {
  try {
    const responses = await ResponseModel.find();
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve data', error });
  }
};

export const create = async (req, res) => {
  try {
    const { name, email, phone, text } = req.body;
    const newResponse = await ResponseModel.create({
      name,
      email,
      phone,
      text,
    });
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(400).json({ message: 'Unable to create the record', error });
  }
};
