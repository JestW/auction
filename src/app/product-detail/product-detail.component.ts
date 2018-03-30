import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  public comments: Comment[];
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden: boolean = true;
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["id"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
  addComment() {
    let comment = new Comment(0 ,this.product.id, new Date().toISOString(), "someOne", this.newRating, this.newComment);
    this.comments.unshift(comment);

    let num = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = num / this.comments.length;
    this.newRating = 5;
    this.newComment = "";
    this.isCommentHidden = true;
  }

}
