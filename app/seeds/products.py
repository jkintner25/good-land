from app.models import db, Product

def seed_products():
    colombia = Product(
        name='Colombia', description='Very delicious coffee!', size=12, price=12.00)
    brazil = Product(
        name='Brazil', description='So yummy coffee!', size=12, price=12.00)
    peru = Product(
        name='Peru', description='Smells good coffee!', size=12, price=12.00)

    db.session.add(colombia)
    db.session.add(brazil)
    db.session.add(peru)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
