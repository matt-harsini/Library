"use strict";

const mainContainer = document.querySelector(".main");
const addBookBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const submitForm = document.querySelector(".submit-form");
const title = document.getElementById("title");
const author = document.getElementById("author_name");
const pages = document.getElementById("pages");
const form = document.getElementById("form");
const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = myLibrary.length || 0;
}

function addBookToLibrary(event) {
  event.preventDefault();
  myLibrary.push(new Book(title.value, author.value, pages.value));
  displayHTML(title.value, author.value, pages.value);
  form.reset();
}

function closeModal(event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function displayHTML(title, author, pages) {
  const html = `
  <div class="book" data-id="${myLibrary[myLibrary.length - 1].id}">
    <p>${title}</p>
    <p>${author}</p>
    <p>${pages}</p>
    <div class="button-group">
      <button class="btn remove" data-index="${
        myLibrary.length - 1
      }">Remove</button>
    </div>
  </div>
  `;
  mainContainer.insertAdjacentHTML("beforeend", html);
}

function removeBook(event) {
  if (!event.target.classList.contains("remove")) return;
  const getBookID = event.target
    .closest("div[data-id]")
    .getAttribute("data-id");
  const getBook = myLibrary.find((book) => book.id === +getBookID);
  const getBookIndex = myLibrary.findIndex((book) => book === getBook);
  myLibrary.splice(getBookIndex, getBookIndex + 1);
  event.target.closest(".book").remove();
}
addBookBtn.addEventListener("click", openModal);

document.addEventListener("keydown", closeModal);

submitForm.addEventListener("click", addBookToLibrary);

// Added event propagation to listen on events for dynamically created HTML elements
mainContainer.addEventListener("click", removeBook);
