const profileService = require("../services/perfilService");

const profileController = {
  async getProfile(req, res, next) {
    try {
      const perfil = await profileService.getPerfil(req, res);
      res.json(perfil);
      console.log("perfil Controller: " + perfil);
    } catch (error) {
      console.error("Erro a obter todos o perfil", error);
      next(error);
    }
  },
};
module.exports = profileController;
