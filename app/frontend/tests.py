from django.test import TestCase, Client
from django.urls import reverse


class FrontendTest(TestCase):
    def test_index(self):
        client = Client()
        response = client.get('/')
        self.assertEquals(response.status_code, 200)
