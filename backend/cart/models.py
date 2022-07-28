import uuid
from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from backend.shop.models import *


User = get_user_model()


class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    customer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='cart')
    created = models.DateTimeField('date created', default=timezone.now)

    def __str__(self):
        return f"Cart of {self.customer.name}"


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    quantity = models.IntegerField(default=0)
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='cart_items')

    def __str__(self):
        return self.product.name
