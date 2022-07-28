from drf_yasg import openapi
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from rest_framework import permissions
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view


schema_view = get_schema_view(
    openapi.Info(
        title="FICHUA API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://fichua.vercel.app/policies/terms/",
        contact=openapi.Contact(email="contact@fichua.local"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('', include('backend.api.urls')),
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
