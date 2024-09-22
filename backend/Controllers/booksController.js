// import { Book } from "../models/bookModel";
import { Book } from "../models/bookModel.js";
//hello
// saving book to database
export const createBook = async (req, res) => {
  try {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
   
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//   Get All Books from database

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//   get one book

export const getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const books = await Book.findById(id);
    res.status(200).send(books);
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//   Update a Book
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.status(200).send({ message: "Book updated successfully" });
    }
  } catch {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//   Delete a Book

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);
    console.log(result + "resultttttt");
    if (!result) {
      res.status(404).send({ message: "Book not found" });
    } else {
      console.log("hiiiii");
      res.status(200).send({ message: "Book Deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
