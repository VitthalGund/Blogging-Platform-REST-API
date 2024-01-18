import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyJWT = async (
    req,
    res,
    next
) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.JWT, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        next();
    });
}