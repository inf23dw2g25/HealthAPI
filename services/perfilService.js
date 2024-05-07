const { google } = require("google-auth-library");
const middleware = require("../controllers/middlewareController");

async function getPerfil(req, res) {
  try {
    if (!middleware.isAuthenticatedBool) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    const accessToken = req.user.accessToken;

    console.log(google.data);
    const oauth2Client = new google.oauth2();
    await oauth2Client.setCredentials({ access_token: accessToken });

    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();
    console.log("perfil Service data: " + data);

    const perfilUsuario = {
      id: data.id,
      nome: {
        primeiro: data.given_name,
        último: data.family_name,
      },
      email: data.email,
      foto_url: data.picture,
      genero: data.gender,
      localizacao: data.locale,
      idioma: data.language,
    };

    res.json(perfilUsuario);
  } catch (error) {
    console.error("Erro ao obter o perfil do usuário:", error);
    res.status(500).json({ message: "Erro ao obter o perfil do usuário" });
  }
}

module.exports = { getPerfil };
