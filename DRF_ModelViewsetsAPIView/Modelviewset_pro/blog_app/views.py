from rest_framework import viewsets
from .serializers import BlogSerializer
from .models import Blog


class BlogModelViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
