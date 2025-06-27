import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(title: string, done : boolean, description:string, user_Id : number) {
    const res = await prisma.todo.create({
        data:{
            title,
            done ,
            description,
            user_Id

        },
        select :{
            id:true
        }
    })

    console.log("success: " + res);
  
}

insertUser("Go to Gym",true,"Go to gym between 7-9",12);


// prisma.user.delete