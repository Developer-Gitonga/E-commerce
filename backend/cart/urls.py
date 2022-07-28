from django.urls import path
from backend.cart.views import *

urlpatterns = [
    path('all/', get_carts),
    path('cartitems/', get_cartitems),
    path('cart/<pk>', single_cart),
    path('cartitem/<pk>', single_cartitem),
]
