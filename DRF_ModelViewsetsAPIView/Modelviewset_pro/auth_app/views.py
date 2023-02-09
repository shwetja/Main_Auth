from rest_framework.generics import CreateAPIView
from .serializers import UserSerializer


class UserRegister(CreateAPIView):
    serializer_class = UserSerializer
