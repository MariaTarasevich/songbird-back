CREATE TABLE question(
    id SERIAL PRIMARY KEY,
    questionText VARCHAR(255),
    navTitle VARCHAR(255),
    questionAudio VARCHAR(512)
)

create TABLE answerOptions (
    id SERIAL PRIMARY KEY,
    question_id INTEGER,
    name VARCHAR(255),
    species VARCHAR(255),
    description VARCHAR(512),
    image VARCHAR(512),
    audio VARCHAR(512),
    isCorrect INTEGER,
    active INTEGER,
    FOREIGN KEY (question_id) REFERENCES question (id)
)