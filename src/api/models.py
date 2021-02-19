from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name= db.Column(db.String(80), unique=False, nullable=False)
    last_name= db.Column(db.String(80), unique=False, nullable=False)
    adress= db.Column(db.String(80), unique=False, nullable=False)
    city= db.Column(db.String(80), unique=False, nullable=False)
    state= db.Column(db.String(80), unique=False, nullable=False)
    zip_code= db.Column(db.String(6), unique=False, nullable=False)
    phone= db.Column(db.String(10), unique=False, nullable=False)
    rewards_pts= db.Column(db.Integer, unique=False, nullable=False)
    orders= db.relationship('Order', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def validate(self,password):
        print("validate in progress")
        print("password doesn't match ",self.password)
        if(self.password != password):
            print("password doesn't match ",self.password)
            return False
        print("password matches")
        return True

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    photo_url = db.Column(db.String(80), unique=True, nullable=False)
    qty= db.Column(db.Integer, unique=False, nullable=False)
    category= db.Column(db.String(80), unique=False, nullable=False)
    order_id= db.Column(db.Integer, db.ForeignKey('order.id'),nullable=False)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    items= db.relationship('Product', backref='order', lazy=True)





   
    
    
    