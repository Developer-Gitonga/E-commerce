from backend.api.views import *
from django.urls import path, include

urlpatterns = [
    path('', getRoutes),
    path('api/', getRoutes),
    path('api/', include('backend.urls')),
    path('api/cart/', include('backend.cart.urls')),
    path('api/shop/', include('backend.shop.urls')),
]
