import { ListUsersCommand, IAMClient} from "@aws-sdk/client-iam";
import {fromIni} from "@aws-sdk/credential-providers"
import jwt from 'jsonwebtoken'

const client = new IAMClient({
    region:"us-east-1",
    maxAttempts:15,
    credentials:fromIni()
    })


async function findAwsIamUser(userName,userId){
        let findUser=false
        const command = new ListUsersCommand({ MaxItems: 10 });
        const response = await client.send(command);
        response.Users?.forEach((user) => {
            if(user.UserName==userName && user.UserId==userId)
                findUser=true          
        })
        return findUser
}

const tokenController={

    getToken:async (req,res)=>{
        const{AwsIamUserName,AwsIamUserId}=req.body
        if(await findAwsIamUser(AwsIamUserName,AwsIamUserId)){
            const token =jwt.sign({AwsIamUserName,AwsIamUserId},process.env.PASSWORD,{expiresIn:600})
            const date=new Date()
            date.setMinutes(date.getMinutes()+10)
            res.status(200).json({
                authenticated:true,
                token,
                expireAt: date.toUTCString()
            })
        }else{
            res.status(401).json({
                authentication:false,
                message: "Get token failed to credentials: userName="+AwsIamUserName+" userId="+AwsIamUserId

            })
        }
    }   
}

export default tokenController