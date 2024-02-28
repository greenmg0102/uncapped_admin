import jwt_decode from 'jwt-decode';

export const accessTokenDecode = (token: any): string => {
    const { sub } = jwt_decode(token) as { sub: { _id: string } };
    return sub._id;
};