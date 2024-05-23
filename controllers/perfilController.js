const profileService = require("../services/perfilService");

const profileController = {
  async getProfile(req, res, next) {
    try {
      const perfil = await profileService.getPerfil(req, res);
      console.log("perfil Controller: ", perfil); // Verifique o perfil recebido
      res.json(perfil);
    } catch (error) {
      console.error("Erro ao obter o perfil:", error);
      next(error);
    }
  },
};

module.exports = profileController;
