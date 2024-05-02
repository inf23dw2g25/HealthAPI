const checkSwaggerAuth = (req, res, next) => {
    // Verifica se o usuário está autenticado
    if (req.isAuthenticated()) {
      // Se estiver autenticado, avance para o próximo middleware
      return next();
    } else {
      // Se não estiver autenticado, redirecione para a rota de autenticação ou retorne um erro
      return res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = checkSwaggerAuth;
  