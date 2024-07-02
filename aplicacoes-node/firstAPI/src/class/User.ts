// import { Request, Response } from "express";
// import { prisma } from "../database/prisma";
// import { Access, Prisma } from "@prisma/client";
// import { WithoutFunctions } from "./helpers";

// export type UserForm = Omit<
//     WithoutFunctions<User>,
//     | "id"
//     > & {}

    // export const user_include = Prisma.validator<Prisma.UserInclude>()({
    //    Access: true
    // })

    // export type UserPrisma = Prisma.UserGetPayload<{include: {Access:true}}>

// export class User {
//     name: string;
//     email: string;
//     password: string;
//     created_at: Date;
//     updated_at: Date;
//     access?: Access;
//     accessId?: string;

//     constructor (
//         name: string,
//         email: string,
//         password: string,
//         created_at?: Date,
//         updated_at?: Date,
//         access?: Access,
//         accessId?: string,
//     ) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.created_at = created_at || new Date();
//         this.updated_at = updated_at || new Date();
//         this.access = access;
//         this.accessId = accessId;
//     }

    // constructor(user_prisma?: UserPrisma) {
    //     user_prisma && this.load(user_prisma)
    // }

//     static async new(form: UserForm) {
//         const data = await prisma.user.create({
//             data: {...form}
//         })

//         const user = new User(data:{})
//     }

//     load(data: UserPrisma) {
//         this.name = data.name;
//         this.email = data.email;
//         this.password = data.password;
//         this.created_at = data.created_at || new Date();
//         this.updated_at = data.updated_at || new Date();
//         this.access = this.access;
//         this.accessId = data.Access?.id;
//     }

// } 