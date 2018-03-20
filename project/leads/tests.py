from django.test import TestCase
from .models import Lead

class LeadModelTest(TestCase):
    def test_str_representation(self):
        lead = Lead.objects.create(
            name='Tom',
            email='tom@whatever.com',
            message='I need some help with a project'
        )
        self.assertEqual(str(lead), 'tom@whatever.com')

