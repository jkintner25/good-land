from flask import Blueprint, jsonify, request
from app.models import Product, db

product_routes = Blueprint('products', __name__)

@product_routes.route('/', methods=["POST"])
def create_product():
  data = request.get_json()
  product = Product(
    name = data['name'],
    description = data['description'],
    size = data['size'],
    price = data['price']
  )

  db.session.add(product)
  db.session.commit()
  return product.to_dict()

@product_routes.route('/', methods=["GET"])
def get_products():
  products = Product.query.all()
  if len(products) > 0:
    return {'products': [product.to_dict() for product in products]}
  else:
    return {'error': 'No products to display.'}, 404
