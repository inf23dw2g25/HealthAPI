const { google } = require("google-auth-library");
const middleware = require("../controllers/middlewareController");

async function getPerfil(req, res) {
  try {
    // Verifique se o usuário está autenticado chamando o middleware
    if (!middleware.isAuthenticatedBool(req)) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    // Obtenha o token de acesso do objeto req.user
    const accessToken = req.user.accessToken;

    // Crie o cliente OAuth2 e configure as credenciais de acesso
    const oauth2Client = new google.auth.OAuth2();
    await oauth2Client.setCredentials({ access_token: accessToken });

    // Crie um cliente OAuth2 para a API do Google
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });

    // Obtenha os detalhes do perfil do usuário
    const { data } = await oauth2.userinfo.get();
    console.log("perfil Service data: " + data);

    // Construa o objeto de perfil do usuário com os dados recebidos
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

    // Envie o perfil do usuário como resposta
    res.json(perfilUsuario);
  } catch (error) {
    console.error("Erro ao obter o perfil do usuário:", error);
    res.status(500).json({ message: "Erro ao obter o perfil do usuário" });
  }
}

module.exports = { getPerfil };
