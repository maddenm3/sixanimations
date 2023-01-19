import connectMongo from '../../utils/connectMongo';
import Request from '../../models/newRequest';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addRequest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');

    const request = await Request.create(req.body);
    console.log('CREATED DOCUMENT', request);

    res.redirect('/success');

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}