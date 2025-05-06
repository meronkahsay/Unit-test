const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    return { success: true, message: 'Signup successful.' };
  };
  module.exports = {signup };
 
  const {signup} = require('./signup');
  describe('Signup', () => {
    it('should successfully sign up with valid credentials', () => {
        const result = signup('newuser@example.com', 'newpassword');
        expect(result.success).toBe(true);
        expect(result.message).toBe('Signup successful.');
    });
    it('should throw an error if email or password is not provided', () => {
         expect(() => signup('', 'password')).toThrow('Email and password are required.');
        expect(() => signup('email', '')).toThrow('Email and password are required.');
    });
  });
  