from django.urls import path, include

urlpatterns = [
    path('api/auth/', include('rest_auth.urls')),
    path('api/auth/register/', include('rest_auth.registration.urls')),
    path('', include('leads.urls')),
    path('', include('frontend.urls')),
]
