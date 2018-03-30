import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 2.5, "这是第一个商品", ["电子", "图书"]),
    new Product(2, "第二个商品", 2.99, 3.5, "这是第二个商品", ["电子"]),
    new Product(3, "第三个商品", 3.99, 4.5, "这是第三个商品", [ "电子", '硬件设备']) ,
    new Product(4, "第四个商品", 4.99, 2.5, "这是第四个商品", [ "图书"]),
    new Product(5, "第五个商品", 5.99, 4.5, "这是第五个商品", ["硬件设备"]),
    new Product(6, "第六个商品", 6.99, 3.5, "这是第六个商品", ["硬件设备", "图书"])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2012-12-12,10:34", "张三", 2.5, "还不错"),
    new Comment(2, 1, "2012-12-13,11:56", "李四", 4.5, "很好"),
    new Comment(3, 1, "2012-12-13,12:13", "王五", 4.5, "还好"),
    new Comment(4, 2, "2012-12-14,11:22", "赵六", 3.5, "蛮好的"),
    new Comment(5, 2, "2012-12-15,10:24", "龙七", 2.5, "还不错"),
  ];
  getAllCategories(): string[] {
    return ["电子", "硬件设备", "图书"];
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timeStamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}

