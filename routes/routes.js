const Router = require('express')
const router = new Router()
const  birdsController = require('../controller/controller')

router.post('/birds', birdsController.createQuestion)
router.get('/birds', birdsController.getQuestions)
router.get('/birds/:id', birdsController.getOneQuestion)
router.put('/birds', birdsController.updateQuestion)
router.delete('/birds/:id', birdsController.deleteQuestion)



module.exports = router