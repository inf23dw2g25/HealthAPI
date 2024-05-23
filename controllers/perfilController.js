const profileService = require("../services/perfilService");

const profileController = {
  async getProfile(req, res, next) {
    res.profileObj;
    try {
      const perfil = res.profileObj;
      console.log("perfil Controller: ", res.profileObj); // Verifique o perfil recebido
      res.json(perfil);
    } catch (error) {
      console.error("Erro ao obter o perfil:", error);
      next(error);
    }
  },
};

module.exports = profileController;
