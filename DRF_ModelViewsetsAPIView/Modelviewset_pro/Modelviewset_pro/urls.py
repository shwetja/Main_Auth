from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from blog_app.views import BlogModelViewSet
from rest_framework.authtoken.views import obtain_auth_token

router = SimpleRouter()
router.register('blog', BlogModelViewSet, basename='blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    path('auth/', include('auth_app.urls')),
    path('token/', obtain_auth_token),
]
