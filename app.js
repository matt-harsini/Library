"use strict";

const mainContainer = document.querySelector(".main");
const addBookBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const submitForm = document.querySelector(".submit-form");
const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {}

function closeModal(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

addBookBtn.addEventListener("click", openModal);

document.addEventListener("keydown", closeModal);


