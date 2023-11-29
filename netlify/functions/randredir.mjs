
export default async (req, context) => {
    const { user, dossier } = context.params;

    const array = ["https://i.imgur.com/U6dyGtN.png", 
    "https://i.imgur.com/qNwJQ1D.png",
    "https://i.imgur.com/pwijRT6.png",
    "https://i.imgur.com/HfEmjiD.png",
    "https://i.imgur.com/wxxMzR9.png",
    "https://i.imgur.com/uOGlEXN.png",
    "https://i.imgur.com/uCIt1Gw.png"
    ];
    const randomElement = array[Math.floor(Math.random() * array.length)];

    // Create a URL to redirect to
    const redirectToUrl = randomElement;

    // Create a Response object for redirection
    const headers = {
        Location: redirectToUrl,
        "Cache-Control": "no-store, must-revalidate"
    };

    return new Response(null, {
        status: 302,
        headers: headers
    });

  };

  export const config = {
    path: ["/img2/:user/:dossier", "/img2/:key/img.png", "/img2/test.png"]
  };