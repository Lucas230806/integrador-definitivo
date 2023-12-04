const express = require('express')
const router = express.Router()

const checkAuth = require('../helpers/auth').checkAuth

//Importar o controlador de pensamentos tought
const ElderlyController = require('../controllers/ElderlyController')


router.get('/add', checkAuth, ElderlyController.createElderly)
router.post('/add', checkAuth, ElderlyController.createElderlySave)
router.get('/perfil', checkAuth, ElderlyController.perfilElderly)
router.get('/dashboard', checkAuth,  ElderlyController.dashboard)
router.get('/dashboardrender', checkAuth,  ElderlyController.dashboardrender)
router.get('/creditos', checkAuth,  ElderlyController.creditos)
router.get('/remedio', checkAuth,  ElderlyController.remedio)
router.post('/remove', checkAuth, ElderlyController.removeElderly)
router.get('/edit/:id', checkAuth, ElderlyController.editElderly)
router.post('/edit', checkAuth, ElderlyController.updateElderly)
router.post('/update', checkAuth, ElderlyController.toggleStatus)

router.get('/', ElderlyController.showApps)

//Exportar a rota
module.exports = router