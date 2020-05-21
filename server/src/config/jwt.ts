export default {
    secretKey:process.env.JWT_SECRET || 'some_secret',
    signOptions: {
        expiresIn: process.env.JWT_EXPIRES || 3600,
      },
}