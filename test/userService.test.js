const { expect } = require('chai');
const sinon = require('sinon');
const UserService = require('../../src/microservices/users/application/UserService.js');
const UserRepository = require('../../src/microservices/users/infraestructure/repositories/UserRepository.js');
const { hash, compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

describe('UserService', () => {
  describe('register', () => {
    it('should register a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe'
      };

      sinon.stub(hash, 'hash').resolves('hashedPassword');
      sinon.stub(UserRepository, 'create').resolves(userData);

      const result = await UserService.register(userData);

      expect(result).to.equal(userData);

      hash.hash.restore();
      UserRepository.create.restore();
    });
  });

  describe('login', () => {
    it('should login a user', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const user = {
        id: 1,
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'guest'
      };

      sinon.stub(UserRepository, 'findByEmail').resolves(user);
      sinon.stub(compare, 'compare').resolves(true);
      sinon.stub(sign, 'sign').returns('token');

      const result = await UserService.login(email, password);

      expect(result).to.deep.equal({ user, token: 'token' });

      UserRepository.findByEmail.restore();
      compare.compare.restore();
      sign.sign.restore();
    });
  });
});