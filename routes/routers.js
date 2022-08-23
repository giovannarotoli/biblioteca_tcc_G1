const db = require('../database/connection');
const express = require('express');
const router = express.Router();

//  importações dos controllers utilizados nas rotas
const autor_livroController = require('../controllers/autor_livroController');
const autor = require('../controllers/autorController');
const cadastro_livrosController = require('../controllers/cadastro_livrosController');
const classificacaoController = require('../controllers/classificacaoController');
const editoraController = require('../controllers/editoraController');
const emprestimo_livroController = require('../controllers/emprestimo_livroController');
const reserva_livroController = require('../controllers/reserva_livroController');
const usuariosController = require('../controllers/usuarioController');
// definição das rotas 

router.get('/autor_livro', autor_livroController.listarautor_livro);
//cadastrar
//editar
//excluir

router.get('/autor', autorController.listarautor);
//cadastrar
//editar
//excluir

router.get('/cadastro', cadastro_livrosController.listarcadastro_livro);
//cadastrar
//editar
//excluir

router.get('/classificacao', classificacaoController.listarclassificacao);
//cadastrar
//editar
//excluir

router.get('/editora', editoraController.listareditora);
//cadastrar
//editar
//excluir

router.get('/emprestimo_livro', emprestimo_livroController.listaremprestimo_livro);
//cadastrar
//editar
//excluir

router.get('/reserva_livro', reserva_livroController.listarreserva_livro);
//cadastrar
//editar
//excluir

router.get('/usuarios', usuariosController.listarusuarios);
//cadastrar
//editar
//excluir



module.exporsts = router;