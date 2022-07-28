from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import status, generics
from backend.serializers import *



User = get_user_model()


@api_view(['GET'])
def get_single_user(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def become_vendor(request):
    try:
        data = request.data
        business = data['business']
        city = data['city']
        address = data['address']
        location = data['location']
        user_id = data['user_id']
        user = User.objects.get(id=user_id)
    except:
        return Response({'error': 'The user_id provided doesnot exist. Try again'}, status=status.HTTP_404_NOT_FOUND)
    
    user.business = business
    user.location = location
    user.city = city
    user.address = address
    user.is_vendor = True
    user.save()
    
    serializer = UserSerializer(user)
    
    return Response(serializer.data)
    
        
        


class ProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'pk'
