const { User } = require('../../../api/models');
const { expect } = require('chai');

const fail = () => expect(true).to.be.false;

describe('User Model', function () {
    it('should use the `users` table', () => {
        expect(User.tableName).to.equal('users');
    });

    describe('::confirmPasswordAndCreate', () => {
        it('should throw an error if the password and confirmation password don\'t match', async () => {
            try {
                await User.confirmPasswordAndCreate({ password: 'foo', password_confirm: 'bar' });
                fail();
            } catch (e) {
                expect(e.message).to.equal(`"${User.PASSWORD_CONFIRMATION_ERROR}"`);
            }
        });

        describe('validation', () => {
            describe('password', () => {
                it('should throw an error if the password is null');
                it('should throw an error if less than 6 characters');
                it('should throw an error if greater than 60 characters');
                it('should hash the password before saving');
            });

            describe('username', () => {
                it('should throw an error if the username is null');
                it('should throw an error if less than 2 characters');
                it('should throw an error if greater than 100 characters');
            });

            describe('email', () => {
                it('should throw an error if greater than 255 characters');
                it('should allow the null');
            });

            describe('first_name', () => {
                it('should throw an error if greater than 100 characters');
                it('should allow null');
            });
        });
    });
});

