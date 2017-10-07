const expect = require('expect');
const request = require('supertest');

const {
    app
} = require('./../server');
const {
    TodoModel
} = require('./../model/todo');

// mock data
const todos = [{
    text: 'First test todo'
}, {
    text: 'Second test todo'
}];


// test method to be called before each test
beforeEach((done) => {
    TodoModel.remove({})
        .then(() => {
            return TodoModel.insertMany(todos);
        })
        .then(() => done());
});

// test to see id Post request with valid data works successfully
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                TodoModel.find({
                    text
                }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                TodoModel.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});


// test get works
describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});