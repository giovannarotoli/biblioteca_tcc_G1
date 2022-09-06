const db = require('../database/connection');
const express = require('express');
const router = express.Router();

//  importações dos controllers utilizados nas rotas
const autorLivroController = require('../controllers/autor_livroController');
const autorController= require('../controllers/autorController');
const livrosController = require('../controllers/livrosController');
const classificacaoController = require('../controllers/classifiicacaoController');
const editoraController = require('../controllers/editoraController');
const emprestimoLivroController = require('../controllers/emprestimoLivroController');
const reservaLivroController = require('../controllers/reservaLivroController');
const usuariosController = require('../controllers/usuariosController');
// definição das rotas 

router.get('/autorlivro', autorLivroController.listarAutorLivro);
//cadastrar
//editar
//excluir

router.get('/autor', autorController.listarAutor);
//cadastrar
//editar
//excluir

router.get('/livros', livrosController.listarLivros);
//cadastrar
//editar
//excluir

router.get('/classificacao', classificacaoController.listarClassificacao);
//cadastrar
//editar
//excluir

router.get('/editora', editoraController.listarEditora);
//cadastrar
//editar
//excluir

router.get('/emprestimolivro', emprestimoLivroController.listarEmprestimoLivro);
//cadastrar
//editar
//excluir

router.get('/reservalivro', reservaLivroController.listarReserva);
//cadastrar
//editar
//excluir

router.get('/usuarios', usuariosController.listarUsuarios);
//cadastrar
//editar
//excluir



module.exports = router;