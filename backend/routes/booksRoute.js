import express from "express";
const router = express.Router();
import  validateBook  from "../middlewares/validateBook.js";
import {
    createBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
} from "../controllers/booksController.js";

// Route for saving book to database
router.post("/", validateBook, createBook);
// Route for Get All Books from database
router.get("/", getAllBooks);
// Route for get one book
router.get("/:id", getOneBook);
// Route for Update a Book
router.put("/:id", validateBook, updateBook);
// Route for delete a book
router.delete("/:id", deleteBook);

export default router;
