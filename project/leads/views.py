from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics

class LeadList(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
