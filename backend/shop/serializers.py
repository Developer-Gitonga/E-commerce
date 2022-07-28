from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from backend.shop.models import *


User = get_user_model()


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CertainCategory(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class SimilarItems(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        
class OrderSerilizer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

