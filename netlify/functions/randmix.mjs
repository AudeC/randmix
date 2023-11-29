
export default async (req, context) => {
    const { user, dossier } = context.params;

    const array = ["https://i.imgur.com/cBvNSlJ.png", "https://i.imgur.com/5heLkG7.png"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    // Fetch the image
    const response = await fetch(randomElement);

    // Get the image data as an ArrayBuffer
    const imageArrayBuffer = await response.arrayBuffer();

    // Convert the ArrayBuffer to a Buffer
    const imageBuffer = Buffer.from(imageArrayBuffer);

    return new Response(
      imageBuffer, {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png", // Adjust the content type based on your image format
        "Cache-Control": "no-store, must-revalidate"
        },
      }
    );

  };

  export const config = {
    path: ["/img/:user/:dossier", "/img/:key/img.png", "/img/test.png"]
  };