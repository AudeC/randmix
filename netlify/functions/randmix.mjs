
export default async (req, context) => {
    const { user, dossier } = context.params;

    const array = ["https://i.imgur.com/cBvNSlJ.png", "https://i.imgur.com/5heLkG7.png"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return fetch(randomElement)

  };

  export const config = {
    path: "/img/:user/:dossier/aupif.png"
  };