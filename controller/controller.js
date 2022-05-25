const db = require('../db') //импортируем пулл. с его помощью мы будем писать sql запросы к базе данных

class BirdsController {
    async createQuestion(req, res) {
        const { id, questiontext, navtitle, questionaudio } = req.body  
        const newQuestion = await db.query('INSERT INTO question (id, questiontext, navtitle, questionaudio) values ($1, $2, $3, $4) RETURNING *', [id, questiontext, navtitle, questionaudio])
        res.json(newQuestion.rows)
    }
    async getQuestions(req, res) {
        const questions = await db.query('SELECT * FROM question')
        res.json(questions.rows)
    }
    async getOneQuestion(req, res) {
        const id = req.params.id //из параметров запроса нам необходимо получить айдишник
        const oneQuestion = await db.query('SELECT * FROM question where id = $1', [id])
        res.json(oneQuestion.rows)
    }
    async updateQuestion(req, res) {
        const { id, questiontext, navtitle, questionaudio } = req.body 
        const updatedQuestion = await db.query('UPDATE question set questiontext = $1, navtitle = $2, questionaudio = $3 where id = $4 RETURNING *', [questiontext, navtitle, questionaudio, id])
        res.json(updatedQuestion.rows)
    }
    async deleteQuestion   (req, res) {
        const id = req.params.id 
        const question = await db.query('DELETE FROM question where id = $1 RETURNING *', [id])
        res.json(question.rows)
    }
}

module.exports = new BirdsController()