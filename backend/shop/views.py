import random
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model

from backend.shop.models import *
from backend.shop.serializers import *

User = get_user_model()


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def single_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def single_category(request, pk):
    try:
        category = Category.objects.get(id=pk)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CategorySerializer(category)
    return Response(serializer.data)


@api_view(['GET'])
def certain_category(request, pk):
    try:
        category = Category.objects.get(id=pk)
        products = Product.objects.filter(category=category)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CertainCategory(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def similar_items(request, pk):
    try:
        category = Category.objects.get(id=pk)
        products = Product.objects.filter(category=category)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)
    print(type(products))
    prods = []
    ids = []
    start = True
    if len(products) < 4:
        serializer = SimilarItems(products, many=True)
        return Response(serializer.data)
    try:
        while start:
            choose_prod = random.choice(products)
            id = choose_prod.id
            if not id in ids:
                prods.append(choose_prod)
                ids.append(id)

            if len(prods) == 4:
                start = False
    except:
        return Response({'error': f'{category.name} has 0 products'}, status=status.HTTP_404_NOT_FOUND)

    serializer = SimilarItems(prods, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_user_products(request, pk):
    user = User.objects.get(id=pk)
    products = Product.objects.filter(vendor=user)
    serializer = UserProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def post_product(request):
    try:
        data = request.data
        vendor = data['vendor']
        name = data['name']
        photo = data['photo']
        price = data['price']
        stock = data['stock']
        slug = data['slug']
        details = data['details']
        category = data['category']

        vd = User.objects.get(id=vendor)
        ct = Category.objects.get(id=category)

    except:
        return Response({'error': 'Something went wrong when posting a product. Try again'}, status=status.HTTP_404_NOT_FOUND)

    product = Product.objects.create(vendor=vd, name=name, slug=slug, photo=photo,
                                     price=price, stock=stock, details=details, category=ct)
    product.save()
    return Response({'success': f'{name} has been successfully posted'})


@api_view(['GET'])
def get_reviews(request, pk):
    product = Product.objects.get(id=pk)
    reviews = Review.objects.filter(product=product.id)

    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


class ProductListView(generics.ListCreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'


class ReviewListView(generics.ListCreateAPIView):
    model = Review
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


@api_view(['GET'])
def get_result(request, name):
    if request.method == 'GET':
        results = Product.objects.filter(name__icontains=name).all()
        print(results)
        serializer = ProductSerializer(results, many=True)
        return Response(serializer.data)
    else:
        return Response({'Error': 'This only accepts a get request'})


@api_view(['Get'])
def all_orders(request):
    orders = Order.objects.all()
    serilizer = OrderSerilizer(orders, many=True)
    return Response(serilizer.data)


@api_view(['Get'])
def user_order(request, id):
    orders = Order.objects.filter(vendor_id=id)
    serilizer = OrderSerilizer(orders, many=True)
    return Response(serilizer.data)


@api_view(['POST'])
def post_order(request):
    try:
        data = request.data
        customer = data['customer']
        product = data['product']
        vendor_id = data['vendor_id']
        count = data['count']
        amount = data['amount']
        paypal_payer_email = data['paypal_payer_email']
        paypal_payer_id = data['paypal_payer_id']
        paypal_payer_name = data['paypal_payer_name']
        paypal_payment_created = data['paypal_payment_created']
        paypal_payment_updated_time = data['paypal_payment_updated_time']

        prod = Product.objects.get(id=product)
        cust = User.objects.get(id=customer)

    except:
        return Response({'error': 'Something went wrong when posting an order. Try again'}, status=status.HTTP_404_NOT_FOUND)

    order = Order.objects.create(customer=cust, product=prod, vendor_id=vendor_id, count=count, amount=amount,
                                 paypal_payer_email=paypal_payer_email, paypal_payer_id=paypal_payer_id,
                                 paypal_payer_name=paypal_payer_name, paypal_payment_created=paypal_payment_created,
                                 paypal_payment_updated_time=paypal_payment_updated_time)
    order.save()
    print(data)
    return Response({'success': 'the order has been successfully made'})


# Order Content required
# {
# "customer": "2",
# "product": "70b9a0ea-bf09-445c-838a-38a69018776d",
# "vendor_id": "1",
# "count": "2",
# "amount": "60",
# "paypal_payer_email": "hussein@gmail",
# "paypal_payer_id": "noinvsjknjkvds",
# "paypal_payer_name": "hussein",
# "paypal_payment_created": "2022-07-13T12:07:03.522490+03:00",
# "paypal_payment_updated_time": "2022-07-13T12:07:03.522490+03:00"
# }

@api_view(['GET'])
def fullfilled_an_order(request, pk):
    try:
        order = Order.objects.get(id=pk)
        order.is_fullfilled = True
        order.save()
    except:
        return Response({'error': 'Something went wrong when fulfilling the order. Try again'}, status=status.HTTP_404_NOT_FOUND)
    return Response({'success': f'{order.id} has been successfully fulfilled'})


@api_view(['GET'])
def status_order(request, stage, pk):
    try:
        v_o = Order.objects.filter(vendor_id=pk)
        order_fullfilled = []
        order_unfullfilled = []
        for n in v_o:
            if n.is_fullfilled == True:
                order_fullfilled.append(n)
            else:
                order_unfullfilled.append(n)
    except:
        return Response({'error': 'Please provide the correct vendor id and the status stage. Try again'}, status=status.HTTP_404_NOT_FOUND)
    if stage == 'done':
        serilizer = OrderSerilizer(order_fullfilled, many=True)
        return Response(serilizer.data)
    if stage == 'undone':
        serilizer = OrderSerilizer(order_unfullfilled, many=True)
        return Response(serilizer.data)
