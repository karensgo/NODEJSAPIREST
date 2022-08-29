const { Pool } = require ('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'apitoti',
    port: '5432'
})


const getTasks = async (req, res) => {
   const response = await pool.query('SELECT * FROM tasks');
   res.status(200).json(response.rows);
};

const getTaskById = async (req,res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM tasks WHERE id = $1' , [id]);
    res.json(response.rows);
}

const createTask = async (req, res) => {
const { name, done } = req.body;
const response = await pool.query('INSERT INTO tasks (name, done) VALUES ($1, $2)' , [name, done]);
    console.log(response);
    res.json({
        message: 'Tarefa criada com sucesso!', 
        body:{
            user: {name, done}
        }
    });


}

const updateTask = async (req,res) => {
    const id = req.params.id;
    const { name, done } = req.body;
    const response = await pool.query('UPDATE tasks SET name = $1, done = $2 WHERE ID = $3', [
        name,
        done,
        id
    ]);
    console.log(response);
    res.json('Tarefa atualizada com sucesso!');
};

const deleteTask = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    console.log(response);
    res.json(`Tarefa ${id} apagada com sucesso!`);

};

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}
