from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    image = db.Column(db.Text)
    description = db.Column(db.Text, nullable = False)
    size = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float(4, 2), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'description': self.description,
            'size': self.size,
            'price': self.price
        }
