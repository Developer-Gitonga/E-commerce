from re import T
import uuid
from venv import create
from django.db import models
from django.utils import timezone
from cloudinary.models import CloudinaryField
from django.contrib.auth import get_user_model


User = get_user_model()


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    photo = CloudinaryField()
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name', )
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    vendor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='vendor')
    name = models.CharField(max_length=200)
    photo = CloudinaryField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    slug = models.SlugField(max_length=200, unique=True)
    stock = models.IntegerField(default=0)
    details = models.TextField()
    mfg = models.DateTimeField('date manufactured', default=timezone.now)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')

    class Meta:
        ordering = ('name',)
        verbose_name = 'product'
        verbose_name_plural = 'products'

    def __str__(self):
        return self.name


class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    comment = models.TextField(max_length=255, blank=True, null=True)
    rating = models.IntegerField(default=0)
    created = models.DateTimeField('date created', default=timezone.now)

    def __str__(self):
        return str(self.customer.name)
    
class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    vendor_id = models.CharField(max_length=200, null=True)
    count = models.IntegerField(default=1)
    amount = models.IntegerField()
    paypal_payer_email = models.CharField(max_length=200)
    paypal_payer_id = models.CharField(max_length=200)
    paypal_payer_name = models.CharField(max_length=200)
    paypal_payment_created = models.DateTimeField()
    paypal_payment_updated_time = models.DateTimeField()
    order_created = models.DateTimeField(auto_now_add=True)
    order_updated = models.DateTimeField(auto_now=True)
    is_fullfilled = models.BooleanField(default=False, null=True)
    
    
