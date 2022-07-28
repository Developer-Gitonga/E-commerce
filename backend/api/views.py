from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getRoutes(request):
    routes = {
        'all': '/api/',

        'jwt create': '/api/auth/jwt/create/',
        'jwt refresh': '/api/auth/jwt/refresh/',
        'user activation': '/api/auth/users/activation/',
        'reset password': '/api/auth/users/reset_password/',
        'confirm reset password': '/api/auth/users/reset_password_confirm/',

        'carts': '/api/cart/all/',
        'cartitems': '/api/cart/cartitems/',
        'cart': '/api/cart/cart/<pk>/',
        'cartitem': '/api/cart/cartitem/<pk>/',

        'categories': 'api/shop/categories/',
        'category': '/api/shop/category/<pk>/',
        'products': '/api/shop/products/',
        'product': '/api/shop/product/<pk>/',
        'orders': '/api/shop/orders/',
        'Post order': '/api/shop/post/order/',
        'Single Users Orders': '/api/shop/user_orders/<id>/',
        'Fullfill Order': '/api/shop/fulfill/order/<pk>/',
        'Order stage': '/api/shop/order/<stage>/<pk>/',
        'User_products': '/api/shop/user/products/<pk>/',
        
        'certain_category': '/api/shop/certain_category/<pk>/',
        'similar_items': '/api/shop/similar_items/<pk>/',
        'post_product': '/api/shop/post/product/',
        'certain category': '/api/shop/certain_category/',
        'similar products': '/api/shop/similar_items/',
        'product reviews': '/api/shop/products/<pk>/reviews/',

        'alt products': '/api/shop/xproducts/',
        'alt single product': '/api/shop/xproduct/<slug>/',
        'alt product reviews': '/api/shop/xproduct/<slug>/reviews/',
        'Single_User':'/api/user/<pk>',
        'Become_Vendor':'/api/user/become-vendor/',
        'Search_Products':'/api/shop/search/<name>/'
    }

    return Response(routes)
