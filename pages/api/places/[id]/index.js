import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const id = request.query.id;

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }
  if (request.method === "PATCH") {
    const placeToUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json(placeToUpdate);
  }
  if (request.method === "DELETE") {
    const placeToDelete = await Place.findByIdAndDelete(id);

    response.status(200).json(placeToDelete);
  }
  return response.status(405).json({ message: "Not Found" });
}
