import cookie from 'cookie'
import cookies from 'js-cookie';

export default async function ggg(req, res){
    if(!req.cookies.token){
        res.status(201).json({message: "Not Authorized"})
        return
    }
    res.status(200).json({token: req.cookies.token});
}