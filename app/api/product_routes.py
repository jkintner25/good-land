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
