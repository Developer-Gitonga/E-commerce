from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'name', 'email', 'contact', 'password')


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ['password', 'groups', 'user_permissions']
