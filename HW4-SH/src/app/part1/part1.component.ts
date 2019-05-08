import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {

  books = [
    {title: 'Abosolute Java', qty: 1, price: 114.95},
    {title: 'Pro HTML5', qty: 2, price: 27.95},
    {title: 'Head First HTML5', qty: 1, price: 27.89}
  ];
  total = undefined;

  constructor() {
  }

  ngOnInit() {
    if (window.localStorage.Mol_cart) {
      this.books = JSON.parse(window.localStorage.getItem('Mol_cart'));
    }
    this.getTotal();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.getTotal();
  }

  getTotal() {

    this.total = this.books.reduce((a, b) => {
      return a + b.qty * b.price;
    }, 0).toFixed(2);

  }


  addBook() {
    this.books.push({title: 'New Book', qty: 1, price: 10.99});
    this.getTotal();
  }

  saveBook() {
    window.localStorage.setItem('Mol_cart', JSON.stringify(this.books));
    alert('Done.');
  }


}
