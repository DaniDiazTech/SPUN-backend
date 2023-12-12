import { Document } from 'mongoose';

// Database models interfaces
export interface UserInterface extends Document {
    firstName?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
  }

export interface UserRegisterInterface{
    firstName?: string;
    lastName?: string;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
}

export interface UserLoginInterface{
    email: string;
    password: string;
}

export interface DecodedTokenInterface{
    id: string;
}
