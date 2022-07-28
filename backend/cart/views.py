from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.cart.models import *
from backend.cart.serializers import *


@api_view(['GET'])
def get_carts(request):
    carts = Cart.objects.all()
    serializer = CartSerializer(carts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def single_cart(request, pk):
    try:
        cart = Cart.objects.get(id=pk)
    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CartSerializer(cart)
    return Response(serializer.data)


@api_view(['GET'])
def get_cartitems(request):
    cartitems = CartItem.objects.all()
    serializer = CartItemSerializer(cartitems, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def single_cartitem(request, pk):
    try:
        cartitem = CartItem.objects.get(id=pk)
    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CartItemSerializer(cartitem)
    return Response(serializer.data)
