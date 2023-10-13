// Modo estrito
"use strict";

// Elementos
const boxes = document.querySelectorAll(".box");
const king = document.querySelector(".chess-piece");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

boxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", dragDrop);
    box.addEventListener("dragend", dragEnd);
});

// Variável para o elemento arrastado
let dragged = "";

// Quando o elemento é arrastado
function dragging() {
    infoDisplay.textContent = "Dragging the " + dragged.id;
}

// Quando o elemento começa a ser arrastado
function dragStart(e) {
    dragged = e.target;
}

// Quando o elemento está sendo arrastado
function dragOver(e) {
    e.preventDefault();
}

// Quando o elemento insere um destino de soltar
function dragEnter(e) {
    e.target.classList.add("dragging");
}

// Quando o elemento deixa o destino de soltar
function dragLeave(e) {
    e.target.classList.remove("dragging");
}

// Quando o elemento é solto em um destino
function dragDrop(e) {
    e.target.appendChild(king);
    e.target.classList.remove("dragging");
}

// Quando o elemento termina de ser arrastado(Soltando o botão do mouse)
function dragEnd(e) {
    e.target.classList.add("target");
    setTimeout(() => e.target.classList.remove("target"), 100);
    infoDisplay.textContent = "";
}   