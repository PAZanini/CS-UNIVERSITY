var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length >= 1) {
          console.log(resultadoAutenticar);
          res.json({
            idusuario: resultadoAutenticar[0].idusuario,
            email: resultadoAutenticar[0].email,
            nick: resultadoAutenticar[0].nick,
            senha: resultadoAutenticar[0].senha,
          });
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  //   var voltaic_idvoltaic = req.body.idVoltaicVincularServer;
  //   var cpf = req.body.cpfServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
    //   } else if (fkEmpresa == undefined) {
    //     res.status(400).send("Sua empresa a vincular está undefined!");
    //   } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf a vincular está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function voltaic(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var static = req.body.staticServer;
  var dynamic = req.body.dynamicServer;
  var speed = req.body.speedServer;
  var evasive = req.body.evasiveServer;
  var smooth = req.body.smoothServer;
  var reactive = req.body.reactiveServer;
  //   var voltaic_idvoltaic = req.body.idVoltaicVincularServer;
  //   var cpf = req.body.cpfServer;

  // Faça as validações dos valores
  if (static == undefined) {
    res.status(400).send("Seu static está undefined!");
  } else if (dynamic == undefined) {
    res.status(400).send("Seu dynamic está undefined!");
  } else if (speed == undefined) {
    res.status(400).send("Sua speed está undefined!");
  } else if (evasive == undefined) {
    res.status(400).send("Seu evasive está undefined!");
  } else if (smooth == undefined) {
    res.status(400).send("Seu smooth está undefined!");
  } else if (reactive == undefined) {
    res.status(400).send("Seu reactive está undefined!");
    //   } else if (fkEmpresa == undefined) {
    //     res.status(400).send("Sua empresa a vincular está undefined!");
    //   } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf a vincular está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .voltaic(static, dynamic, speed, evasive, smooth, reactive)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function atlVoltaic(req, res) {
  var idVoltaic = req.body.idVoltaic;
  var idusuario = req.body.idusuario;
  if (idVoltaic == undefined || idusuario == undefined) {
    res.status(400).send("Algum parametro está undefined!");
  } else {
    usuarioModel
      .atlVoltaic(idVoltaic, idusuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function atlGrafico(req, res) {
  var idusuario = req.body.idusuario;
  if (idusuario == undefined) {
    res.status(400).send("Algum parametro está undefined!");
  } else {
    usuarioModel
      .atlGrafico(idusuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar,
  voltaic,
  atlVoltaic,
  atlGrafico,
};
