"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import datetime

## Security Suite
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    city = request.json.get("city", None)
    state = request.json.get("state", None)
    zip_code = request.json.get("zip_code", None)
    phone = request.json.get("phone", None)

    if not email:
        return jsonify({"msg": "Email is required"}), 400
    if not password:
        return jsonify({"msg": "Password is required"}), 400
    if not first_name:
        return jsonify({"msg": "first_name is required"}), 400
    if not last_name:
        return jsonify({"msg": "last_name is required"}), 400
    if not city:
        return jsonify({"msg": "city is required"}), 400
    if not state:
        return jsonify({"msg": "state is required"}), 400
    if not zip_code:
        return jsonify({"msg": "zip_code is required"}), 400
    if not phone:
        return jsonify({"msg": "phone is required"}), 400

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "Username  already exists"}), 400

    # make sure all fields are represented from the model when creating the user below
    user = User(
        email=email, 
        password=generate_password_hash(password),
        rewards_pts=0, 
        first_name=firstName,
        last_name=lastName,
        city=city,
        state=state,
        zip_code=zipCode,
        phone=phone,
        is_active=True)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User successfully registered"}),200


# Provide a method to create access tokens. The create_jwt()
# function is used to actually generate the token
@api.route('/login', methods=['POST'])
def login():
    # make sure request is a json
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    # get email and password from request
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    # if params are empty, return a 400
    if not email:
        return jsonify({"msg": "Missing email parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    # try to find user
    try:
        # query user
        user = User.query.filter_by(email=email).first()
        # test validate method. 
        if user.validate(password):
            # if user is validated (password is correct), return the token
            expires = datetime.timedelta(days=7)
            response_msg = {
                "user": user.serialize(),
                'token': create_access_token(identity=email,expires_delta=expires),
                # 'token': create_access_token(identity=email),
                "expires_at": expires.total_seconds()*1000 
            }
            status_code = 200
        else:
            # otherwise, raise an exception so that they check their email and password
            raise Exception('Failed to login. Check your email and password.')
    # catch the specific exception and store in var
    except Exception as e:
        # format a json respons with the exception
        response_msg = {
            'msg': str(e),
            'status': 401
        }
        status_code = 401
    
    # general return in json with status
    return jsonify(response_msg), status_code

# (GET user profile)
@api.route('/user/<int:user_id>', methods=['GET'])
def profile(user_id):
    user = User.query.get(user_id)
    return jsonify(user.serialize()), 200

# (GET user profile)
@api.route('/user/all', methods=['GET'])
def profile_all():
    user = User.query.all()
    data = {
        "users": list(map(lambda x: x.serialize(),user))
    }
    return jsonify(data), 200

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


# list of diff endpoints needed for nvp
# (GET all products) 
# (CREATE order post request) 





# (UPDATE user profile)