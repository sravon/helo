import Cookie from "cookie";

 const logout = async (req, res) =>{
    
    res.setHeader(
        "Set-Cookie",
        Cookie.serialize("token", req.body.token, {
            htttpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            expires: new Date(0),
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200;
    res.json({ success: true });
}

export default logout