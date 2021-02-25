from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name= db.Column(db.String(80), unique=False, nullable=False)
    last_name= db.Column(db.String(80), unique=False, nullable=False)
    address= db.Column(db.String(80), unique=False, nullable=False)
    city= db.Column(db.String(80), unique=False, nullable=False)
    state= db.Column(db.String(80), unique=False, nullable=False)
    zip_code= db.Column(db.String(6), unique=False, nullable=False)
    phone= db.Column(db.String(10), unique=False, nullable=False)
    rewards_pts= db.Column(db.Integer, unique=False, nullable=False)
    orders= db.relationship('Order', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def validate(self,password):
        return check_password_hash(self.password, password)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "phone": self.phone,
            "rewards_pts": self.rewards_pts,
            "orders": [o.serialize() for o in self.orders]
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    photo_url = db.Column(db.String(80), unique=True, nullable=False)
    qty= db.Column(db.Integer, unique=False, nullable=False)
    category= db.Column(db.String(80), unique=False, nullable=False)
    order= db.relationship('Order_Item', backref='Product', lazy=True, uselist=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "photo_url": self.photo_url,
            "qty": self.qty,
            "category": self.category,
            # do not serialize the password, its a security breach
        }

class Order_Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id= db.Column(db.Integer, db.ForeignKey('order.id'),nullable=False)
    product_id= db.Column(db.Integer, db.ForeignKey('product.id'),nullable=False)
    

    def serialize(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            # do not serialize the password, its a security breach
        }


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    items= db.relationship('Order_Item', backref='order', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "items": self.items,
            # do not serialize the password, its a security breach
        }



   
    
    
    