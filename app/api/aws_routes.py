from flask import Blueprint, request
from app.AWS import (allowed_file, upload_file_to_s3, get_unique_filename)
from app.models import db


aws_routes = Blueprint('images', __name__)


@aws_routes.route('/', methods=["POST"])
def upload():
    if "image" not in request.files:
        return {"url": ""}

    image = request.files['image']

    if not allowed_file(image.filename):
        return {"errors": "image format must be .pdf .jpg .jpeg .png .gif"}

    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return {"errors": upload}, 400

    url = upload['url']

    return {"url": url}
