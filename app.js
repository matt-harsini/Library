"use strict";

const mainContainer = document.querySelector(".main");
const addBookBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const submitForm = document.querySelector(".submit-form");
const title = document.getElementById("title");
const author = document.getElementById("author_name");
const pages = document.getElementById("pages");
const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(event) {
  event.preventDefault();
  myLibrary.push(new Book(title.value, author.value, pages.value));
  displayHTML(title.value, author.value, pages.value);
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
  <div class="book">
    <p>${title}</p>
    <p>${author}</p>
    <p>${pages}</p>
    <div class="button-group">
      <button class="btn remove">Remove</button>
    </div>
  </div>
  `;
  mainContainer.insertAdjacentHTML("beforeend", html);
}

addBookBtn.addEventListener("click", openModal);

document.addEventListener("keydown", closeModal);

submitForm.addEventListener("click", addBookToLibrary);
