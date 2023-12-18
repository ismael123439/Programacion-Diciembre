import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render('index',{title : "mi primera chamba"})); //renderisar pagina con metodo fleecha y get

router.get("/about", (req, res) => res.render('about',{title : "about me"}));

router.get("/contact", (req, res) => res.render('contact',{title : "contact me"}));

export default router