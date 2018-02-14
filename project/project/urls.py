from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from frontend import views as frontend_views

urlpatterns = [
    path('', frontend_views.index ),
    path('api/', include('leads.urls'))
]

urlpatterns = format_suffix_patterns(urlpatterns)
