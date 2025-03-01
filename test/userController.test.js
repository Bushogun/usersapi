const { expect } = require('chai');
const sinon = require('sinon');
const { register, login } = require('../../src/microservices/users/infraestructure/api/controllers/userController.js');
const User = require('../../src/database/models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

describe('UserController', () => {
  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'password123',
          firstName: 'John',
          lastName: 'Doe'
        }
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      };

      sinon.stub(bcrypt, 'hash').resolves('hashedPassword');
      sinon.stub(User, 'create').resolves(req.body);

      await register(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(req.body)).to.be.true;

      bcrypt.hash.restore();
      User.create.restore();
    });
  });

  describe('login', () => {
    it('should login a user', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'password123'
        }
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      };

      const user = {
        id: 1,
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'guest'
      };

      sinon.stub(User, 'findOne').resolves(user);
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(jwt, 'sign').returns('token');

      await login(req, res);

      expect(res.json.calledWith({ token: 'token' })).to.be.true;

      User.findOne.restore();
      bcrypt.compare.restore();
      jwt.sign.restore();
    });
  });
});
