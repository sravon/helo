import Cookie from "cookie";

export default (req, res) =>{

    res.setHeader(
        "Set-Cookie",
        Cookie.serialize("token", req.body.token, {
            htttpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200;
    res.json({ success: true });
}